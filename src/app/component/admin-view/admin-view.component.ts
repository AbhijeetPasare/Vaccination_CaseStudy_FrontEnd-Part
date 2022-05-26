import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
logout():void{
  this.authService.logoutUser();
}
}
