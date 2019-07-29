import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-coordinador-presupuesto-consultar',
  templateUrl: './coordinador-presupuesto-consultar.component.html',
  styleUrls: ['./coordinador-presupuesto-consultar.component.css']
})
export class CoordinadorPresupuestoConsultarComponent implements OnInit {
  searchStatement: string;
  data: {lastname: string, name: string, cedula: string, budget: number}[] = [{lastname: 'ejemploLastname', name: 'ejemploName', cedula: 'ejemploCedula', budget: 100}];
  headerToData = {'Apellido': 'lastname', 'Nombre': 'name', 'Cédula': 'cedula', 'Presupuesto': 'budget'};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.searchBudget().subscribe(data => {
      this.data = data;
    });
  }

}
