import { HeroesComponent } from './heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FontAwesomeModule
  ]
})
export class HeroesModule {

 }
