import { Component, Input, OnInit } from '@angular/core';
import { MovieCard } from '../interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movieCard:MovieCard;
  public isLogin:boolean = false;
  public isAdmin:boolean = false;

  constructor() { }

  
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const type = JSON.parse(atob(token.split('.')[1])).type
      this.isLogin = true;
      if(type === 2)
          this.isAdmin = true;
    }
    else {
      this.isLogin = false;
    }
  }

 
}
