import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-coordinador-votantes-votante',
  templateUrl: './coordinador-votantes-votante.component.html',
  styleUrls: ['./coordinador-votantes-votante.component.css']
})
export class CoordinadorVotantesVotanteComponent implements OnInit {
  voterLeaderList: {voter: User, leader: User}[] = [];
  voterLeader = null;

  constructor(private userService: UserService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.fetchVoters();
  }

  fetchVoters(){
    this.userService.getCandidate(this.dataService.serviceData).subscribe((candidate: User) => {
      let c = new User(candidate)

      this.userService.getVoters(c).subscribe((votersAndLeaders: {voter: User, leader: User}[]) => {
        this.voterLeaderList = votersAndLeaders.map(vl => {
          return {voter: new User(vl.voter), leader: new User(vl.leader)};
        });
      });
    });
  }

}
