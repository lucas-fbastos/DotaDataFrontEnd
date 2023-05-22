import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from '../services/matches.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-matches-detail',
  templateUrl: './matches-detail.component.html',
  styleUrls: ['./matches-detail.component.css']
})
export class MatchesDetailComponent implements OnInit {

  public id: number = 0;
  private matchesService: MatchesService;
  public matchData: any;
  public isReady:boolean= false;

  constructor( private http: HttpClient,private route: ActivatedRoute) { 
    this.matchesService = new MatchesService(http);
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.matchesService.getMatchesDetails(this.id).subscribe(response => {
      this.matchData = response;
      this.isReady = true;
    });
    console.log(this.matchData);
  }

}
