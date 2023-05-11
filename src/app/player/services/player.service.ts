import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  public getPlayerData(id: number){
   return this.http.get('http://localhost:8080/player/'+id);
  }

  public getRecentMatches(id:number ){
    return this.http.get("http://localhost:8080/matches/"+ id +"/recent");
  }
}
