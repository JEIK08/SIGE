import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cost } from 'src/app/models/cost';
import { CostType } from 'src/app/models/cost-type';
import { CostService } from 'src/app/services/cost.service';

@Component({
  selector: 'app-coordinador-evento-informacion-gastos',
  templateUrl: './coordinador-evento-informacion-gastos.component.html',
  styleUrls: ['./coordinador-evento-informacion-gastos.component.css']
})
export class CoordinadorEventoInformacionGastosComponent implements OnInit {
  costToCreate: Cost = new Cost();
  costTypes: CostType[] = [];
  costsAdded: Cost[] = [];

  public showtable = false;

  @Output() costEmitter = new EventEmitter<Cost[]>();

  tableData: { type: string, amount: number, name: string, description: string }[] = [];

  headerToData = { 'Clasificación': 'type', 'Nombre': 'name', 'Monto': 'amount', 'Descripción': 'description' };

  constructor(private costService: CostService) { }

  ngOnInit() {
    this.fetchCostTypes();
  }

  fetchCostTypes() {
    this.costService.getCostTypes().subscribe((costTypes: CostType[]) => {
      this.costTypes = costTypes.map((c) => new CostType(c));
    });
  }

  addCost() {
    console.log('adding cost');
    console.log(this.costToCreate);
    console.log(this.costToCreate.check());
    if (this.costToCreate && this.costToCreate.check()) {
      const costToAdd = this.costToCreate;
      this.costsAdded.push(costToAdd);
      console.log(this.costsAdded);
      this.tableData.push({ type: costToAdd.type.name, amount: costToAdd.amount, name: costToAdd.name, description: costToAdd.description });
      // console.log(this.tableData);
      this.costToCreate = new Cost();

      this.costEmitter.emit(this.costsAdded);
    }
  }

  showTable() {
    this.showtable = !this.showtable;
  }

}
