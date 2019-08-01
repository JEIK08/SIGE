import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Location } from 'src/app/models/location';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-coordinador-votantes-votante',
  templateUrl: './coordinador-votantes-votante.component.html',
  styleUrls: ['./coordinador-votantes-votante.component.css']
})
export class CoordinadorVotantesVotanteComponent implements OnInit {
  voterLeaderList: {voter: User, leader: User}[] = [];
  mVoterLeader: {voter: User, leader: User} = null;
  voterLocation = '';
  votingStation = '';

  get voterLeader(): {voter: User, leader: User} {
    return this.mVoterLeader;
  }

  set voterLeader(vl: {voter: User, leader: User}) {
    this.mVoterLeader = vl;

    this.locationService.getLocationOfVoter(this.mVoterLeader.voter).subscribe((location: Location) => {
      this.voterLocation = location && location.name ? location.name : '';
      this.locationService.getFather(location).subscribe((vStation: Location) => {
        this.votingStation = vStation && vStation.name ? vStation.name : '';
      });
    });
  }

  constructor(private userService: UserService,
              public dataService: DataSharingService,
              private locationService: LocationService) { }

  ngOnInit() {
    this.fetchVoters();
  }

  fetchVoters() {
    this.userService.getCandidate(this.dataService.serviceData).subscribe((candidate: User) => {
      const c = new User(candidate);

      this.userService.getVoters(c).subscribe((votersAndLeaders: {voter: User, leader: User}[]) => {
        this.voterLeaderList = votersAndLeaders.map(vl => {
          return {voter: new User(vl.voter), leader: new User(vl.leader)};
        });
      });
    });
  }

}
