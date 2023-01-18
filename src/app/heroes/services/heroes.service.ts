import { Hero } from './../model/hero';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: Hero[];


  constructor(private http:HttpClient) {
    let heroesString = localStorage.getItem("heroes") || '{}';
    if(heroesString === "{}")
      this.getAllHeroes().subscribe(response=> heroesString = response.toString());
    this.heroes = JSON.parse(heroesString);
  }

  public getAllHeroes(){
   return this.http.get("http://localhost:8080/heroes");
  }

  public getHeroData(heroId:number){
    return this.heroes.filter(hero => hero.id == heroId)[0];
  }
}
