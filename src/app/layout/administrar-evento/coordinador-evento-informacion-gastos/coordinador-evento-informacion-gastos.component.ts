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
  mCostsAdded: Cost[] = []

  public showtable = false;

  @Output() costEmitter = new EventEmitter<Cost[]>();

  tableData: { type: string, amount: number, name: string, description: string}[] = [];

  headerToData = { 'Clasificación': 'type', 'Nombre': 'name', 'Monto': 'amount', 'Descripción': 'description'};

  set costsAdded(cList: Cost[]) {
    console.log('COSTOS SIENDO AÑADIDOS');
    console.log(cList);
    this.mCostsAdded = cList;
    this.tableData = this.mCostsAdded.map((cost: Cost) => {
      return {
        type: cost.type.name,
        amount: cost.amount,
        name: cost.name,
        description: cost.description
      };
    });
  }

  get costsAdded(): Cost[] {
    return this.mCostsAdded;
  }
  
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
    console.log("adding cost");
    console.log(this.costToCreate);
    console.log(this.costToCreate.check());
    if (this.costToCreate && this.costToCreate.check()){
      let costToAdd = this.costToCreate;
      this.mCostsAdded.push(costToAdd);
      console.log(this.mCostsAdded);
      this.tableData.push({ type: costToAdd.type.name, amount: costToAdd.amount, name: costToAdd.name, description: costToAdd.description});
      //console.log(this.tableData);
      this.costToCreate = new Cost();

      this.costEmitter.emit(this.mCostsAdded);
    }
  }

  showTable() {
    this.showtable = !this.showtable;
  }

  compareCostType(c1: CostType, c2: CostType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  deleteCost(row: { type: string, amount: number, name: string, description: string}) {
    for (let i = 0; i < this.costsAdded.length; i++) {
      if (this.costsAdded[i].amount === row.amount && this.costsAdded[i].type.name === row.type && this.costsAdded[i].description === row.description) {
        this.mCostsAdded.splice(i, 1);
      }
    }

    for (let i = 0; i < this.tableData.length; i++) {
      if (this.tableData[i].amount === row.amount && this.tableData[i].name === row.name && this.tableData[i].type === row.type) {
        this.tableData.splice(i, 1);
      }
    }

    this.costEmitter.emit(this.mCostsAdded);
  }

}
