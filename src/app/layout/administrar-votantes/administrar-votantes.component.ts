import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CoordinadorVotantesListadoComponent } from './coordinador-votantes-listado/coordinador-votantes-listado.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-administrar-votantes',
  templateUrl: './administrar-votantes.component.html',
  styleUrls: ['./administrar-votantes.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarVotantesComponent implements OnInit {
  @ViewChild('coordinadorVotantesListado') coordinadorVotantesListado: CoordinadorVotantesListadoComponent;

  leaderSelected: User = new User();

  @Input() subItemSelectedVotos: number;

  constructor() { }

  ngOnInit() {
  }

  onLeaderSelected(leader: User) {
    console.log('method onLeaderSelected called');
    this.coordinadorVotantesListado.getVotersFromLeader(leader);
  }
}
