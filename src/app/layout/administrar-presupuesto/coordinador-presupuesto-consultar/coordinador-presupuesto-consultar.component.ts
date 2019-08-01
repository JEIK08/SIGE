import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-coordinador-presupuesto-consultar',
  templateUrl: './coordinador-presupuesto-consultar.component.html',
  styleUrls: ['./coordinador-presupuesto-consultar.component.css']
})
export class CoordinadorPresupuestoConsultarComponent implements OnInit {
  @Output() editUserEmitter: EventEmitter<User> = new EventEmitter<User>();

  mSearchStatement: string;
  data: {
    id: string,
    lastname: string,
    name: string,
    cedula: string,
    budget: number
  }[] = [];

  dataStored: {
    id: string,
    lastname: string,
    name: string,
    cedula: string,
    budget: number
  }[] = [];

  headerToData = {
    Apellido: 'lastname',
    Nombre: 'name',
    Cédula: 'cedula',
    Monto: 'budget'
  };

  set searchStatement(ss: string) {
    this.mSearchStatement = ss;
    this.data = this.dataStored.filter((row: {
      id: string,
      lastname: string,
      name: string,
      cedula: string,
      budget: number
    }) => {
      if (!this.mSearchStatement) {
        return true;
      }
      return row.name.toLowerCase().indexOf(this.mSearchStatement.toLowerCase()) !== -1;
    });
  }

  get searchStatement(): string {
    return this.mSearchStatement;
  }

  constructor(private userService: UserService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.userService.getUsers(User.COORDINADOR, this.dataService.serviceData).subscribe((subordinates: User[]) => {
      this.dataStored = subordinates.map(subordinate => {
        return {
          id: subordinate.id,
          lastname: subordinate.lastname,
          name: subordinate.name,
          cedula: subordinate.cedula,
          budget: subordinate.budget
        };
      });
      this.data = this.dataStored.slice();
    });
  }

  onEdit(row: {
    id: string,
    lastname: string,
    name: string,
    cedula: string,
    budget: number
  }) {
    this.userService.getUserFromId(row.id).subscribe((user: User) => {
      const userToEdit = new User(user);
      console.log('User budget updated');
      console.log(user);
      this.editUserEmitter.emit(userToEdit);
    });
  }

  updateUser(user: User) {
    console.log('Usuario recibido');
    console.log(user);
    for (let i = 0; i < this.dataStored.length; i++) {
      if (this.dataStored[i].cedula === user.cedula) {
        this.dataStored[i] = user;
        break;
      }
    }
    this.searchStatement = this.searchStatement;
  }

}
