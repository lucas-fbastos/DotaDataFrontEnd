import { HeroesService } from './heroes/services/heroes.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'dota-trainer';
  heroesService: HeroesService;
  constructor(private http: HttpClient){
    this.heroesService = new HeroesService(http);
    this.heroesService.getAllHeroes().subscribe(response=>{
      localStorage.setItem("heroes",JSON.stringify(response))
    });
  }

  ngOnInit(): void {
  }

}
