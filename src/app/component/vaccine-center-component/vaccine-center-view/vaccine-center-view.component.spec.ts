import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCenterViewComponent } from './vaccine-center-view.component';

describe('VaccineCenterViewComponent', () => {
  let component: VaccineCenterViewComponent;
  let fixture: ComponentFixture<VaccineCenterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineCenterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineCenterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
