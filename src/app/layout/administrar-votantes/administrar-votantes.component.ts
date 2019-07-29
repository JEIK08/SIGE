import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-administrar-votantes',
  templateUrl: './administrar-votantes.component.html',
  styleUrls: ['./administrar-votantes.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarVotantesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
