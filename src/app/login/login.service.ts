import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  isloggedIn: boolean = false;

  isAdmin: boolean = false;

  constructor() { }

  Login(email: string, password: string) {

    if (email === 'admin@gmail.com' && password === 'Admin') {
      console.log('Admin Logged in');
      this.isloggedIn = true;
      this.isAdmin = true;
    }
    if (email === 'user@gmail.com' && password === 'User') {
      console.log('User Logged in');
      this.isloggedIn = true;
      this.isAdmin = false;
    }
    return this.isloggedIn;
  }
}
