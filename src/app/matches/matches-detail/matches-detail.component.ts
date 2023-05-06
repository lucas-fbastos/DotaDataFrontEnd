import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-matches-detail',
  templateUrl: './matches-detail.component.html',
  styleUrls: ['./matches-detail.component.css']
})
export class MatchesDetailComponent implements OnInit {

  public id: number = 0;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  private getMatch(id:number){
    // @todo: get match from api
  }


}
