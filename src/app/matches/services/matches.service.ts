import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http: HttpClient) { }

  public getMatchesDetails(id:number){
    return this.http.get('http://localhost:8080/matches/details/'+id)
  }

  
}
