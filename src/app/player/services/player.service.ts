import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  public getPlayerData(){
   return this.http.get('../../../assets/player.json');
  }

  public getRecentMatches(){
    return this.http.get("http://localhost:8080/matches/90413764/recent");
  }
}
