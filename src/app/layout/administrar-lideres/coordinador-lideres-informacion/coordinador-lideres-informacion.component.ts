import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/models/location';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coordinador-lideres-informacion',
  templateUrl: './coordinador-lideres-informacion.component.html',
  styleUrls: ['./coordinador-lideres-informacion.component.css']
})
export class CoordinadorLideresInformacionComponent implements OnInit {
  mSubordinate: User = null;
  voteGoal: number = 0;
  subordinates: User[] = [];
  subordinateLocation = '';
  @Output() subordinateEmitter = new EventEmitter<User>();

  get COORDINADOR(): string {
    return User.COORDINADOR;
  }

  get LIDER(): string {
    return User.LIDER;
  }

  get subordinate(): User {
    return this.mSubordinate;
  }

  set subordinate(s: User) {
    this.mSubordinate = s;
    console.log('Subordinado');
    console.log(this.mSubordinate);
    if (this.mSubordinate == null) {
      this.voteGoal = 0;
    } else {
      this.voteGoal = this.mSubordinate.voteGoal;
    }

    if (this.mSubordinate.type === User.VOTANTE) {
      this.locationService.getLocationOfVoter(this.mSubordinate).subscribe((location: Location) => {
        this.subordinateLocation = location && location.name ? location.name : '';
      });
    } else {
      this.locationService.getLocation(this.mSubordinate).subscribe((location: Location) => {
        this.subordinateLocation = location && location.name ? location.name : '';
      });
    }
    this.onSubordinateSelected();
  }

  constructor(private userService: UserService,
              public dataService: DataSharingService,
              private locationService: LocationService) { }

  ngOnInit() {
    this.fetchSubordinates();
  }

  fetchSubordinates() {
    this.userService.getUsers('', this.dataService.serviceData).subscribe((subordinates) => {
      this.subordinates = subordinates.map(s => new User(s));
    });
  }

  onSubordinateSelected() {
    if (this.subordinate && this.subordinate.check()) {
      this.subordinateEmitter.emit(this.subordinate);
    }
  }

  postGoal() {
    if (this.subordinate && this.voteGoal >= 0) {
      console.log('VOTE GOAL');
      console.log(this.voteGoal);
      this.userService.postGoal(this.subordinate, this.voteGoal).subscribe((subordinadoActualizado: User) => {
        console.log('Meta de votos del suborinado ha sido actualizado');
        for (let i = 0; i < this.subordinates.length; i++) {
          if (this.subordinates[i].cedula === subordinadoActualizado.cedula) {
            this.subordinates[i] = new User(subordinadoActualizado);
          }
        }
        Swal.fire('Operación exitosa!', 'Meta actualizada con éxito!', 'success');
      },
      err => {
        console.log('Error:');
        console.log(err);
        Swal.fire('Error', 'No se pudo actualizar la meta', 'error');
      });
    }
  }


}
