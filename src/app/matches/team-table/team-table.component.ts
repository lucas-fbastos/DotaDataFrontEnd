import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {


  @Input() players: any;
  constructor() { }

  ngOnInit(): void {
  }

}
