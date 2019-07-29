import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-coordinador-votantes-votantes-por-lider',
  templateUrl: './coordinador-votantes-votantes-por-lider.component.html',
  styleUrls: ['./coordinador-votantes-votantes-por-lider.component.css']
})
export class CoordinadorVotantesVotantesPorLiderComponent implements OnInit {
  mLeader: User = null;
  leaders: User[] = [];
  @Output() leaderEmitter = new EventEmitter<User>();

  get leader(): User {
    return this.mLeader;
  }

  set leader(l: User) {
    this.mLeader = l;
    this.onLeaderSelected();
  }

  constructor(private userService: UserService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.fetchLeaders();
  }

  fetchLeaders(){
    this.userService.getUsers(User.LIDER, this.dataService.serviceData).subscribe((leaders) => {
      this.leaders = leaders.map(l => new User(l));
    });
  }

  onLeaderSelected() {
    if (this.leader && this.leader.check()) {
      this.leaderEmitter.emit(this.leader);
    }
  }

}
