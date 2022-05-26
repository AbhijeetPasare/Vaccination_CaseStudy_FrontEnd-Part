import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine-center-view',
  templateUrl: './vaccine-center-view.component.html',
  styleUrls: ['./vaccine-center-view.component.css']
})
export class VaccineCenterViewComponent implements OnInit {
  title = 'Welcome To Vaccine Center Portal';

  constructor() { }

  ngOnInit(): void {
  }

}
