import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-coordinador-presupuesto-informacion',
  templateUrl: './coordinador-presupuesto-informacion.component.html',
  styleUrls: ['./coordinador-presupuesto-informacion.component.css']
})
export class CoordinadorPresupuestoInformacionComponent implements OnInit {
  subordinate: User = null;
  subordinates: User[] = [];
  budget: number = 0;

  constructor(private userService: UserService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.fetchSubordinates();
  }

  fetchSubordinates(){
    this.userService.getUsers(User.COORDINADOR, this.dataService.serviceData).subscribe((subordinates: User[]) => {
      this.subordinates = subordinates.map(s => new User(s));
    });
  }

  onSubmit(){
    console.log(this.subordinate);
    console.log(this.subordinate.check());
    if (this.subordinate && this.subordinate.check()){
      this.userService.postBudget(this.subordinate, this.budget).subscribe(data => {
        console.log('Presupuesto enviado');
      });
    }
  }

}
