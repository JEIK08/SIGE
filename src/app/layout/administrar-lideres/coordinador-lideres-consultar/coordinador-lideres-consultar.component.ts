import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-coordinador-lideres-consultar',
  templateUrl: './coordinador-lideres-consultar.component.html',
  styleUrls: ['./coordinador-lideres-consultar.component.css']
})
export class CoordinadorLideresConsultarComponent implements OnInit {
  data: User[] = [];
  headerToData = {
    Nombre: 'name',
    Apellido: 'lastname',
    Cédula: 'cedula'
  };

  constructor(private userService: UserService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.fetchSubordinates(this.dataService.serviceData);
  }

  fetchSubordinates(manager: User) {
    console.log(manager);
    console.log(manager.check());
    if (manager && manager.check()) {
      this.userService.getUsers('', manager).subscribe((users: User[]) => {
        this.data = users.map(u => new User(u));
      });
    }
  }
}
