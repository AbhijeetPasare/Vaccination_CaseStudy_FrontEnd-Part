import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccineInventory } from 'src/app/class/vaccine-inventory';
import { VaccineInventoryService } from 'src/app/service/vaccine-inventory.service';

@Component({
  selector: 'app-create-vaccine-inventory',
  templateUrl: './create-vaccine-inventory.component.html',
  styleUrls: ['./create-vaccine-inventory.component.css']
})
export class CreateVaccineInventoryComponent implements OnInit {
  centerCode! : number;
  inventory : VaccineInventory = new VaccineInventory();
  submitted = false;
  constructor(private inventoryService : VaccineInventoryService, private router : Router, private route: ActivatedRoute) { }
  
  ngOnInit() { 
    this.centerCode = this.route.snapshot.params['code'];
    alert("centercode ="+ this.centerCode);
  }

  newVaccineInventory(): void {
    this.submitted = false;
    this.inventory = new VaccineInventory();
   
  }

  save() {
    this.inventoryService.createVaccineInventory(this.centerCode, this.inventory).subscribe(data => {
      console.log(data)
      this.inventory = new VaccineInventory();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit(createForm: { value: any }) {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    return this.router.navigate(['/inventories']);
  }
}
