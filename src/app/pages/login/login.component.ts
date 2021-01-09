import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};
  public isError: boolean = false
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const { email, password } = this.user;
    const data = {
      email,
      password,
    };
    this.dataService.login(data).subscribe((res: any) => {
      if (res.error) {
        this.isError = true
      } else {
        localStorage.setItem('token', res.token);
        this.router.navigate(['']);
      }
    });
  }


  isValid() {
    const { email, password } = this.user;
    return !(email && password && this.validateEmail(email) && this.validatePassword(password));
  }

  validateEmail(mail: string) {
    if (mail === undefined) {
      return true;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  validatePassword(password: string) {
    if (password === undefined) {
      return true;
    }
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      return true;
    }
    return false;
  }
}
