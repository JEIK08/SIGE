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
  usersAdded: User[] = [];
  allUsers: User[] = [];
  @Output() usersAddedEmitter = new EventEmitter<User[]>();

  public showtable = false;

  tableData: { cedula: string, name: string }[] = [];
  headerToData = {
    'Número de identificación': 'cedula',
    'Nombre del invitado': 'name'
  };


  constructor(private userService: UserService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers('', this.dataService.serviceData).subscribe((users: User[]) => {
      this.allUsers = users.map((u) => new User(u));
    });
  }

  addUser() {
    if (this.usersAdded && this.userToAdd.check()){

      this.usersAdded.push(this.userToAdd);
      this.tableData.push({ cedula: this.userToAdd.cedula, name: this.userToAdd.name });
      console.log(this.usersAdded);
      this.usersAddedEmitter.emit(this.usersAdded);
      this.userToAdd = null;
    }
  }

  showTable() {
    this.showtable = !this.showtable;
  }
}
