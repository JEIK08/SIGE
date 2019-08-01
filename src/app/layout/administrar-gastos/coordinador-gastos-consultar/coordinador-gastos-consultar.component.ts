import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CostService } from 'src/app/services/cost.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Cost } from 'src/app/models/cost';

@Component({
  selector: 'app-coordinador-gastos-consultar',
  templateUrl: './coordinador-gastos-consultar.component.html',
  styleUrls: ['./coordinador-gastos-consultar.component.css']
})
export class CoordinadorGastosConsultarComponent implements OnInit {
  @Output() editCostEmitter: EventEmitter<Cost> = new EventEmitter<Cost>();

  mSearchStatement = '';
  data: {
    id: number,
    type: string,
    amount: number,
    name: string
  }[] = [];

  dataStored: {
    id: number,
    type: string,
    amount: number,
    name: string
  }[] = [];

  headerToData = {'Clasificación del gasto': 'type', 'Tipo de gasto': 'name', Monto: 'amount'};

  get searchStatement(): string {
    return this.mSearchStatement;
  }

  set searchStatement(ss: string) {
    this.mSearchStatement = ss;
    this.data = this.dataStored.filter((cost) => {
      if (this.mSearchStatement === '') {
        return true;
      }

      return cost.name.toLowerCase().indexOf(this.mSearchStatement.toLowerCase()) !== -1;
    });
  }

  constructor(private costService: CostService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.fetchCosts();
  }

  fetchCosts() {
    this.costService.searchCosts(this.dataService.serviceData).subscribe((costs) => {
      console.log('costs fetched');
      this.dataStored = costs;
      this.data = this.dataStored.slice();
      this.searchStatement = this.searchStatement;
    });
  }

  onDelete(row: {
    id: number,
    type: string,
    amount: number,
    name: string
  }) {
    this.costService.getCostFromId(row.id).subscribe((cost: Cost) => {
      const costToDelete = new Cost(cost);
      this.costService.deleteCost(costToDelete).subscribe((pCostDeleted: Cost) => {
        console.log('Cost deleted succesfully');
        const costDeleted = new Cost(pCostDeleted);
        for (let i = 0; i < this.dataStored.length; i++) {
          if (this.dataStored[i].id === costDeleted.id) {
            this.dataStored.splice(i, 1);
            break;
          }
        }
        this.searchStatement = this.searchStatement;
      });
    });
  }

  onEdit(row: {
    id: number,
    type: string,
    amount: number,
    name: string
  }) {
    console.log(row);
    this.costService.getCostFromId(row.id).subscribe((cost) => {
      const costToEdit = new Cost(cost);
      this.editCostEmitter.emit(costToEdit);
    });
  }

  insertCost(cost: Cost) {
    this.fetchCosts();
  }

  updateCost(cost: Cost) {
    for (let i = 0; i < this.dataStored.length; i++) {
      if (this.dataStored[i].id === cost.id) {
        this.dataStored[i] = {
          id: cost.id,
          type: cost.type.name,
          amount: cost.amount,
          name: cost.name
        };
        break;
      }
    }
    this.searchStatement = this.searchStatement;
  }

}
