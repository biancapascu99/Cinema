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
    console.log(data)
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
    return !(email && password && this.validateEmail(email));
  }

  validateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

}
