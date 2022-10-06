import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})



export class LoginGuard implements CanActivate, CanLoad {


  constructor(private loginservice: LoginService, private router: Router) { }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginservice.isloggedIn ? true : this.router.navigate(['/Login']);
    // this  ternary operator is return true if this.loginService.isloggedIn is true else redirect to login page , this is called guard, this is used in the page refeseh or page load or page reload, this is used to check if user is logged in or not, if user is logged in then only he can access the page else redirect to login page.
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginservice.isloggedIn;
  }
}
