import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isLogin: boolean = false;
  public isAdmin: boolean = false;
  public idUser: number;
  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const type = JSON.parse(atob(token.split('.')[1])).type
      this.idUser = JSON.parse(atob(token.split('.')[1]))._id
      this.isLogin = true;
      if (type === 2) {
        this.isAdmin = true;
      }
    }
    else {
      this.isLogin = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    location.reload();
  }

}
