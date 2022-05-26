import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminId: string = "";
  password: string = "";
  retUrl: string | null = "admin-view";

  constructor(private authService: AuthService, private router: Router,
    private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.queryParamMap.subscribe(params => {
      this.retUrl = params.get('retUrl');
    })
  }

  adminLogin(loginForm: any) {
    //console.log(loginForm.value);
    this.authService.login(loginForm.value.adminId, loginForm.value.password).subscribe(data => {
      if (this.retUrl != null) {
        this.router.navigate([this.retUrl]);
      }
      else {
        this.router.navigate(['admin-view']);
      }
    });
  }
}
