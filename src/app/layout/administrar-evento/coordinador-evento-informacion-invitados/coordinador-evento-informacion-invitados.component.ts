import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-coordinador-evento-informacion-invitados',
  templateUrl: './coordinador-evento-informacion-invitados.component.html',
  styleUrls: ['./coordinador-evento-informacion-invitados.component.css']
})
export class CoordinadorEventoInformacionInvitadosComponent implements OnInit {
  userToAdd: User = null;
  mUsersAdded: User[] = [];
  allUsers: User[] = [];
  @Output() usersAddedEmitter = new EventEmitter<User[]>();

  public showtable = false;

  tableData: { cedula: string, name: string }[] = [];
  headerToData = {
    'Número de identificación': 'cedula',
    'Nombre del invitado': 'name'
  };

  set usersAdded(uList: User[]) {
    console.log('INVITADOS SIENDO AÑADIDOS');
    console.log(uList);
    this.mUsersAdded = uList;
    this.tableData = this.mUsersAdded.map((user: User) => {
      return {
        cedula: user.cedula,
        name: user.name
      };
    });
  }

  get usersAdded(): User[] {
    return this.mUsersAdded;
  }

  constructor(private userService: UserService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getCandidate(this.dataService.serviceData).subscribe((candidate: User) => {
      this.userService.getUsers('', candidate).subscribe((users: User[]) => {
        const usersWithoutCurrent: User[] = users.filter(u => u.cedula != this.dataService.serviceData.cedula);
        this.allUsers = [candidate].concat(usersWithoutCurrent).map((u) => new User(u));
      });
    });
  }

  addUser() {
    let alreadyAdded = false;

    if (this.mUsersAdded && this.userToAdd.check()) {
      for (const user of this.usersAdded) {
        if (user.cedula === this.userToAdd.cedula) {
          alreadyAdded = true;
          break;
        }
      }

      if (!alreadyAdded) {
        this.mUsersAdded.push(this.userToAdd);
        this.tableData.push({ cedula: this.userToAdd.cedula, name: this.userToAdd.name });
        console.log(this.mUsersAdded);
        this.usersAddedEmitter.emit(this.mUsersAdded);
        this.userToAdd = null;
      }
    }
  }

  showTable() {
    this.showtable = !this.showtable;
  }

  compareUsers(u1: User, u2: User): boolean {
    return u1 && u2 ? u1.id === u2.id : u1 === u2;
  }

  deleteGuest(row: { cedula: string, name: string }) {
    for (let i = 0; i < this.usersAdded.length; i++) {
      if (this.usersAdded[i].cedula === row.cedula) {
        this.mUsersAdded.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < this.tableData.length; i++) {
      if (this.tableData[i].cedula === row.cedula) {
        this.tableData.splice(i, 1);
        break;
      }
    }

    this.usersAddedEmitter.emit(this.mUsersAdded);
  }
}
