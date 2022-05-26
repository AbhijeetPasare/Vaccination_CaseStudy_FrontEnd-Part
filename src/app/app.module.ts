import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './component/admin-view/admin-view.component';
import { CreateVaccinecenterComponent } from './component/vaccine-center-component/create-vaccinecenter/create-vaccinecenter.component';
import { UpdateVaccinecenterComponent } from './component/vaccine-center-component/update-vaccinecenter/update-vaccinecenter.component';
import { DetailsVaccinecenterComponent } from './component/vaccine-center-component/details-vaccinecenter/details-vaccinecenter.component';
import { ListVaccinecenterComponent } from './component/vaccine-center-component/list-vaccinecenter/list-vaccinecenter.component';
import { VaccineCenterViewComponent } from './component/vaccine-center-component/vaccine-center-view/vaccine-center-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VaccineDetailsComponent } from './component/vaccine-component/vaccine-details/vaccine-details.component';
import { UpdateVaccineComponent } from './component/vaccine-component/update-vaccine/update-vaccine.component';
import { CreateVaccineComponent } from './component/vaccine-component/create-vaccine/create-vaccine.component';

import { VaccineSearchComponent } from './component/vaccine-component/vaccine-search/vaccine-search.component';
import { VaccineViewwwComponent } from './component/vaccine-component/vaccine-viewww/vaccine-view.component';
import { VaccineViewComponent } from './component/vaccine-component/vaccine-view/vaccine-view.component';
import { VaccineInventoryViewComponent } from './component/vaccine-inventory-component/vaccine-inventory-view/vaccine-inventory-view.component';
import { CreateVaccineInventoryComponent } from './component/vaccine-inventory-component/create-vaccine-inventory/create-vaccine-inventory.component';
import { VaccineInventoryListComponent } from './component/vaccine-inventory-component/vaccine-inventory-list/vaccine-inventory-list.component';
import { VaccineInventoryDetailsComponent } from './component/vaccine-inventory-component/vaccine-inventory-details/vaccine-inventory-details.component';
import { UpdateVaccineInventoryComponent } from './component/vaccine-inventory-component/update-vaccine-inventory/update-vaccine-inventory.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateMemberComponent } from './component/user/member/create-member/create-member.component';
import { MemberDetailsComponent } from './component/user/member/member-details/member-details.component';
import { MemberListComponent } from './component/user/member/member-list/member-list.component';
import { UpdateMemberComponent } from './component/user/member/update-member/update-member.component';
import { AddMemberStatusComponent } from './component/user/member-status/add-member-status/add-member-status.component';
import { GetMemberStatusDetailsComponent } from './component/user/member-status/get-member-status-details/get-member-status-details.component';
import { MemberStatusListComponent } from './component/user/member-status/member-status-list/member-status-list.component';
import { UpdateMemberStatusComponent } from './component/user/member-status/update-member-status/update-member-status.component';
import { AppointmentDetailsComponent } from './component/user/Vaccine-Appointment/appointment-details/appointment-details.component';
import { AppointmentListComponent } from './component/user/Vaccine-Appointment/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './component/user/Vaccine-Appointment/create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './component/user/Vaccine-Appointment/update-appointment/update-appointment.component';
import { AddVaccineRegistrationComponent } from './component/user/vaccine-registration/add-vaccine-registration/add-vaccine-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AdminLoginComponent,
    AdminViewComponent,
   //vaccine-center
    CreateVaccinecenterComponent,
    UpdateVaccinecenterComponent,
    DetailsVaccinecenterComponent,
    ListVaccinecenterComponent,
    VaccineCenterViewComponent,
   //vaccine
    VaccineDetailsComponent,
    UpdateVaccineComponent,
    CreateVaccineComponent,
    VaccineViewwwComponent,
    VaccineSearchComponent,
    VaccineViewComponent,
    VaccineInventoryViewComponent,
  //vaccine-Inventory
    CreateVaccineInventoryComponent,
    VaccineInventoryDetailsComponent,
    VaccineInventoryListComponent,
    UpdateVaccineInventoryComponent,
    SidebarComponent,
    FooterComponent,

   //user
    CreateMemberComponent,
    MemberDetailsComponent,
    MemberListComponent,
    UpdateMemberComponent,
    AddMemberStatusComponent,
    GetMemberStatusDetailsComponent,
    MemberStatusListComponent,
    UpdateMemberStatusComponent,
    AppointmentDetailsComponent,
    AppointmentListComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    AddVaccineRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
