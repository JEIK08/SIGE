import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-administrar-lideres',
  templateUrl: './administrar-lideres.component.html',
  styleUrls: ['./administrar-lideres.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarLideresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
