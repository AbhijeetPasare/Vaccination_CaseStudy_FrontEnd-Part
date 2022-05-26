import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Vaccine } from 'src/app/class/vaccine';
import { VaccineService } from 'src/app/service/vaccine.service';

@Component({
  selector: 'app-vaccine-view',
  templateUrl: './vaccine-view.component.html',
  styleUrls: ['./vaccine-view.component.css']
})
export class VaccineViewwwComponent implements OnInit {

  vaccine!: Observable<Vaccine[]>;

  constructor(private vaccineService: VaccineService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.vaccine = this.vaccineService.getAllVaccine();
  }

}
