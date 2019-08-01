import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CoordinadorGastosConsultarComponent } from './coordinador-gastos-consultar/coordinador-gastos-consultar.component';
import { Cost } from 'src/app/models/cost';
import { CoordinadorGastosInformacionComponent } from './coordinador-gastos-informacion/coordinador-gastos-informacion.component';
import { CostService } from 'src/app/services/cost.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-administrar-gastos',
  templateUrl: './administrar-gastos.component.html',
  styleUrls: ['./administrar-gastos.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarGastosComponent implements OnInit {
  @ViewChild('coordinadorGastosConsultar') coordinadorGastosConsultar: CoordinadorGastosConsultarComponent;
  @ViewChild('coordinadorGastosInformacion') coordinadorGastosInformacion: CoordinadorGastosInformacionComponent;

  constructor(private costService: CostService) { }

  ngOnInit() {
  }

  onCostCreated(cost: Cost) {
    this.coordinadorGastosConsultar.insertCost(cost);
  }

  onCostEdited(cost: Cost) {
    this.coordinadorGastosConsultar.updateCost(cost);
  }

  onEdit(cost: Cost) {
    console.log('cost received');
    console.log(cost);
    this.coordinadorGastosInformacion.costToCreate = cost;
    this.costService.getOwner(cost).subscribe((owner: User) => {
      this.coordinadorGastosInformacion.leaderSelected = new User(owner);
    });
  }


}
