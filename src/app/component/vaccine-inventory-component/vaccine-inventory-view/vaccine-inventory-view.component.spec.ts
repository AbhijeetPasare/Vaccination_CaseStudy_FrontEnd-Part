import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineInventoryViewComponent } from './vaccine-inventory-view.component';

describe('VaccineInventoryViewComponent', () => {
  let component: VaccineInventoryViewComponent;
  let fixture: ComponentFixture<VaccineInventoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineInventoryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineInventoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
