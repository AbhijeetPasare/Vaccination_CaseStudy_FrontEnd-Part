import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/admin-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor( private authService : AuthService, private router : Router )  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isUserLoggedIn()) {
        alert("You Need To Log In To View This Page.  You are Redirected To The Login Page");
        this.router.navigate(["adminlogin"], { queryParams : {retUrl : route.url}});
        return false;
      }
    return true;
  }
  
  }
