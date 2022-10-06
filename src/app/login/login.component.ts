
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

// dont user import { Router } from 'express'; in service
@Component({
  selector: 'htl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {

    if (this.loginService.Login(this.email, this.password)) {
      console.log(this.loginService.Login(this.email, this.password));
      this.router.navigate(['/rooms']);
    }
  }
}

