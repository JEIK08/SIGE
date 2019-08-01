import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { Location } from 'src/app/models/location';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { UserService } from 'src/app/services/user.service';
import { LocationService } from 'src/app/services/location.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coordinador-presupuesto-informacion',
  templateUrl: './coordinador-presupuesto-informacion.component.html',
  styleUrls: ['./coordinador-presupuesto-informacion.component.css']
})
export class CoordinadorPresupuestoInformacionComponent implements OnInit {
  @Output() userEditedEmitter: EventEmitter<User> = new EventEmitter<User>();

  mSubordinate: User = null;
  subordinates: User[] = [];
  budget = 0;

  subordinateLocation = '';

  get subordinate(): User {
    return this.mSubordinate;
  }

  set subordinate(s: User) {
    this.mSubordinate = s;
    this.budget = this.mSubordinate && this.mSubordinate.budget ? this.mSubordinate.budget : 0;
    this.locationService.getLocation(this.mSubordinate).subscribe((location: Location) => {
      this.subordinateLocation = location && location.name ? location.name : '';
    });
  }

  constructor(private userService: UserService,
              public dataService: DataSharingService,
              private locationService: LocationService) { }

  ngOnInit() {
    this.fetchSubordinates();
  }

  fetchSubordinates() {
    this.userService.getUsers(User.COORDINADOR, this.dataService.serviceData).subscribe((subordinates: User[]) => {
      this.subordinates = subordinates.map(s => new User(s));
    });
  }

  onSubmit() {
    console.log(this.subordinate);
    console.log(this.subordinate.check());
    if (this.subordinate && this.subordinate.check()) {
      this.userService.postBudget(this.subordinate, this.budget).subscribe(data => {
        this.subordinate.budget = this.budget;
        this.userEditedEmitter.emit(this.subordinate);
        this.subordinate = null;
        console.log('Presupuesto enviado');
        Swal.fire('Operación exitosa!', 'Presupuesto actualizado con éxito!', 'success');
      },
      err => {
        console.log('Error:');
        console.log(err);
        Swal.fire('Error', 'No se pudo actualizar el presupuesto', 'error');
      });
    }
  }

}
