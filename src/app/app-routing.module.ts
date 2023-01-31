import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {
    path:'matches',
    loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule)
  },
  {
    path:'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path:'player',
    loadChildren: () => import('./player/player.module').then(m => m.PlayerModule)
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
