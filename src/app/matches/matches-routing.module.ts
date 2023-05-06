import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesDetailComponent } from './matches-detail/matches-detail.component';

import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [

  { path: '', component: MatchesComponent},
  { path: 'detail/:id', component: MatchesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
