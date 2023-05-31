import { HttpClientModule } from '@angular/common/http';
import { PlayerRoutingModule } from './player-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroStatsComponent } from './hero-stats/hero-stats.component';



@NgModule({
  declarations: [
    PlayerComponent,
    HeroStatsComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class PlayerModule {

}
