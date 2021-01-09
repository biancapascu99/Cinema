import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any = {};
  public isError: boolean = false
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    const { email, password, confirm_password } = this.user;
    const data = {
      email,
      password,
      type: 1
    };
    this.dataService.register(data).subscribe((res: any) => {
      if (res.error) {
        this.isError = true
      } else {
        this.router.navigate(['/login']);
      }
    });
  }


  isValid() {
    const { email, password, confirm_password } = this.user;
    return !(email && password && confirm_password && this.validateEmail(email) && this.validatePasswords(password, confirm_password) && this.validatePassword(password));
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

  validatePasswords(password: string, confirme_password: string) {
    if (password === confirme_password)
      return true;

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