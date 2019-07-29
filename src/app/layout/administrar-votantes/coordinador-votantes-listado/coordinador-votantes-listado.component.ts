import { Component, OnInit, Input } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-coordinador-votantes-listado',
  templateUrl: './coordinador-votantes-listado.component.html',
  styleUrls: ['./coordinador-votantes-listado.component.css']
})
export class CoordinadorVotantesListadoComponent implements OnInit {
  @Input() leader: User;
  searchStatement = '';
  data: User[] = [];
  headerToData = {
    Nombre: 'name',
    Apellido: 'lastname',
    Cédula: 'cedula'
  };

  constructor(private userService: UserService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.getVotersFromLeader(this.dataService.serviceData);
  }

  getVotersFromLeader(leader: User) {
    this.userService.searchVotersFromLeader(leader).subscribe(data => {
      this.data = data;
    });
  }

}
