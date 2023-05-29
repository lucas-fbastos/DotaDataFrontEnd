import { PlayerService } from './../services/player.service';

import { faSteam,fab } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public playerData: any;
  public estimatedMedal: string = "";
  public realMedal: string = "";
  public matches: any;
  public playerId: number = 0;
  public playerService: PlayerService;
  public isReady:boolean= false;


  constructor(private http: HttpClient, library: FaIconLibrary, private route: ActivatedRoute, private router: Router) {
    library.addIconPacks(fab)
    library.addIcons(faSteam);
    this.playerService = new PlayerService(http);
    this.playerId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.playerService.getPlayerData(this.playerId).subscribe(response =>{
      this.playerData = response;
      this.estimatedMedal = this.calculateMedal(this.playerData.mmrEstimate)
      this.realMedal = this.calculateRealRank(this.playerData.rankTier);
      this.playerService.getRecentMatches(this.playerId).subscribe((response)=> {
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

  public calculateRealRank(rank: number){
    if(rank!=undefined && rank!=null && rank!=0){
      const strRank = rank.toString().split('');
      const medal: number = +strRank[0];
      const stars:number = +strRank[1];
      let mmr = medal * 700 - 420;
      mmr = mmr + stars * 140 - 280;
      return this.calculateMedal(mmr);
    }
    return  "../../../assets/rank/rank1.webp";
  }

  public redirectToPage(match: any) {
  
    this.router.navigate(["/matches/detail/"+match.matchId]); // Replace '/other-page' with the desired route/path
  }

  public calculateMedal(mmr:number) {
    let medal = mmr/140;
    medal = Math.trunc(medal)+1;
    medal > 37 ? medal = 37 : medal;
    return  "../../../assets/rank/rank"+medal+".webp";
  }

}
