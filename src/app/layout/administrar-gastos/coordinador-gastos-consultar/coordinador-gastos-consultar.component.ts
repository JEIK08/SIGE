import { Component, OnInit } from '@angular/core';
import { CostService } from 'src/app/services/cost.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Cost } from 'src/app/models/cost';

@Component({
  selector: 'app-coordinador-gastos-consultar',
  templateUrl: './coordinador-gastos-consultar.component.html',
  styleUrls: ['./coordinador-gastos-consultar.component.css']
})
export class CoordinadorGastosConsultarComponent implements OnInit {
  mSearchStatement: string;
  data: {type: string, amount: number, name: string}[] = [];
  dataStored: {type: string, amount: number, name: string}[] = [];

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
    });
  }

  onSubmit() {

  }

  insertCost(cost: Cost) {
    this.fetchCosts();
  }

}
