import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Cost } from 'src/app/models/cost';
import { CostType } from 'src/app/models/cost-type';
import { User } from 'src/app/models/user';
import { CostService } from 'src/app/services/cost.service';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coordinador-gastos-informacion',
  templateUrl: './coordinador-gastos-informacion.component.html',
  styleUrls: ['./coordinador-gastos-informacion.component.css']
})
export class CoordinadorGastosInformacionComponent implements OnInit {
  costToCreate: Cost = new Cost();
  @Output() costCreated: EventEmitter<Cost> = new EventEmitter<Cost>();
  @Output() costEdited: EventEmitter<Cost> = new EventEmitter<Cost>();
  costTypes: CostType[] = [];
  leaderSelected: User = null;
  leaders: User[] = [];

  constructor(private costService: CostService, private userService: UserService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.fetchCostTypes();
    this.fetchLeaders();
  }

  fetchCostTypes() {
    this.costService.getCostTypes().subscribe((costTypes: CostType[]) => {
      this.costTypes = costTypes.map(c => new CostType(c));
    });
  }

  fetchLeaders() {
    this.userService.getUsers(User.COORDINADOR, this.dataService.serviceData).subscribe((coordinators: User[]) => {
      this.leaders = [this.dataService.serviceData].concat(coordinators.map(c => new User(c)));
      this.userService.getUsers(User.LIDER, this.dataService.serviceData).subscribe((leaders: User[]) => {
        this.leaders = this.leaders.concat(leaders.map(l => new User(l)));
      });
    });
  }

  onSubmit() {
    console.log(this.costToCreate);
    console.log(this.costToCreate.check());
    console.log(this.leaderSelected);
    console.log(this.leaderSelected.check());
    if (this.costToCreate && this.costToCreate.check() && this.leaderSelected && this.leaderSelected.check()) {
      this.costService.postCost(this.costToCreate).subscribe(data => {
        console.log('Cost created succesfully');
        this.costCreated.emit(this.costToCreate);
        this.costToCreate = new Cost();
        this.leaderSelected = null;
        Swal.fire('Operación exitosa!', 'Gasto creado con éxito!', 'success');
      },
      err => {
        console.log('Error:');
        console.log(err);
        Swal.fire('Error', 'No se pudo crear el gasto', 'error');
      });
    }
  }

  onEdit() {
    console.log(this.costToCreate);
    console.log(this.costToCreate.check());
    console.log(this.leaderSelected);
    console.log(this.leaderSelected.check());
    if (this.costToCreate && this.costToCreate.check() && this.leaderSelected && this.leaderSelected.check()) {
      this.costService.editCost(this.costToCreate).subscribe(data => {
        console.log('Cost edited succesfully');
        this.costEdited.emit(this.costToCreate);
        this.costToCreate = new Cost();
        this.leaderSelected = null;
        Swal.fire('Operación exitosa!', 'Gasto editado con éxito!', 'success');
      },
      err => {
        console.log('Error:');
        console.log(err);
        Swal.fire('Error', 'No se pudo editar el gasto', 'error');
      });
    }
  }

  compareCostType(ct1: CostType, ct2: CostType): boolean {
    return ct1 && ct2 ? ct1.id === ct2.id : ct1 === ct2;
  }

  compareUsers(u1: User, u2: User): boolean {
    return u1 && u2 ? u1.id === u2.id : u1 === u2;
  }

}
