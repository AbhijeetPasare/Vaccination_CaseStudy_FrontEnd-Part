import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn : boolean = false;
  constructor (){
    this.isLoggedIn = false;
  }

  login (adminId : string, password : string) : Observable <boolean> {
    if(adminId === "admin@vaccinationdrive.com" && password === "admin#@007") {
      this.isLoggedIn = true;
    }
   else {
     alert("You are Not Register ");
     this.isLoggedIn = false;
     return of(this.isLoggedIn);
   }
   return of(this.isLoggedIn);
 }
 logoutUser () :void {
   this.isLoggedIn = false;
 }

 isUserLoggedIn() : boolean {
   return this.isLoggedIn;
 }

}
