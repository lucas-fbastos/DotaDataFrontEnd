import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'dota-trainer';
  constructor(private http: HttpClient){
    this.http.get("http://localhost:8080/heroes").subscribe(response=>{
      localStorage.setItem("heroes",response.toString())
    });
  }

  ngOnInit(): void {
  }

}
