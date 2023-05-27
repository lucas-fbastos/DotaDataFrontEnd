import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches/matches.component';
import { MatchesDetailComponent } from './matches-detail/matches-detail.component';
import { TeamTableComponent } from './team-table/team-table.component';


@NgModule({
  declarations: [
    MatchesComponent,
    MatchesDetailComponent,
    TeamTableComponent,
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule
  ]
})
export class MatchesModule { }
