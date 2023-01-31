import { HeroesService } from './../../heroes/services/heroes.service';
import { PlayerService } from './../services/player.service';

import { faSteam,fab } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public playerData: any;
  public medal: string = "";
  public matches: any;
  public playerService: PlayerService;
  public isReady:boolean= false;

  constructor(private http: HttpClient, library: FaIconLibrary) {
    library.addIconPacks(fab)
    library.addIcons(faSteam);
    this.playerService = new PlayerService(http);

  }

  ngOnInit(): void {
    this.playerService.getPlayerData().subscribe(response =>{
      this.playerData = response;
      this.medal = this.calculateMedal(this.playerData.mmr_estimate.estimate);
      this.http.get("http://localhost:8080/matches/90413764/recent").subscribe((response)=> {
        this.matches = response;
        console.log(response);
        this.matches = this.matches.sort(this.compareMatchId)

        this.isReady = true;
      });

    });
  }

  private compareMatchId( a:any, b:any ) {
    if ( a.match_id < b.match_id ){
      return 1;
    }
    if ( a.match_id > b.match_id ){
      return -1;
    }
    return 0;
  }

  public calculateAverageRank(rank: number){
    if(rank!=undefined && rank!=null){
      const strRank = rank.toString().split('');
      const medal: number = +strRank[0];
      const stars:number = +strRank[1];
      let mmr = medal * 700 - 420;
      mmr = mmr + stars * 140 - 280;
      return this.calculateMedal(mmr);
    }
    return "";
  }


  private calculateMedal(mmr:number) {
    let medal = mmr/140;
    medal = Math.trunc(medal)+1;
    medal > 37 ? medal = 37 : medal;
    return  "../../../assets/rank/rank"+medal+".webp";
  }

}
