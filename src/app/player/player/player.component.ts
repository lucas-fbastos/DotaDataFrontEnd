
import { faSteam,fab } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public playerData: any;
  public medal: string = "";
  public matches: any;

  constructor(private http: HttpClient, library: FaIconLibrary) {
    library.addIconPacks(fab)
    library.addIcons(faSteam);
  }

  ngOnInit(): void {
    this.http.get('../../../assets/player.json').subscribe((response)=>{
      this.playerData = response;
      this.medal = this.calculateMedal(this.playerData.mmr_estimate.estimate);
      console.log(response);

      this.http.get("../../../assets/match.json").subscribe((response)=> {
        this.matches = response;
      });
    });
  }

  public calculateAverageRank(rank: number){
    let strRank = rank.toString().split('');
    let medal: number = +strRank[0];
    let stars:number = +strRank[1];
    let mmr = medal * 700 - 420;
    mmr = mmr + stars * 140 - 280;
    return this.calculateMedal(mmr);
  }


  private calculateMedal(mmr:number) {
    let medal = mmr/140;
    medal = Math.trunc(medal)+1;
    medal > 37 ? medal = 37 : medal;
    return  "../../../assets/rank/rank"+medal+".webp";
  }

}
