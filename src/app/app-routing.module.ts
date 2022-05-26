import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthenticationGuard } from './authentication.guard';
import { AdminViewComponent } from './component/admin-view/admin-view.component';
import { AddMemberStatusComponent } from './component/user/member-status/add-member-status/add-member-status.component';
import { GetMemberStatusDetailsComponent } from './component/user/member-status/get-member-status-details/get-member-status-details.component';
import { MemberStatusListComponent } from './component/user/member-status/member-status-list/member-status-list.component';
import { UpdateMemberStatusComponent } from './component/user/member-status/update-member-status/update-member-status.component';
import { CreateMemberComponent } from './component/user/member/create-member/create-member.component';
import { MemberDetailsComponent } from './component/user/member/member-details/member-details.component';
import { MemberListComponent } from './component/user/member/member-list/member-list.component';
import { UpdateMemberComponent } from './component/user/member/update-member/update-member.component';
import { AppointmentDetailsComponent } from './component/user/Vaccine-Appointment/appointment-details/appointment-details.component';
import { AppointmentListComponent } from './component/user/Vaccine-Appointment/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './component/user/Vaccine-Appointment/create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './component/user/Vaccine-Appointment/update-appointment/update-appointment.component';
import { AddVaccineRegistrationComponent } from './component/user/vaccine-registration/add-vaccine-registration/add-vaccine-registration.component';
import { CreateVaccinecenterComponent } from './component/vaccine-center-component/create-vaccinecenter/create-vaccinecenter.component';
import { DetailsVaccinecenterComponent } from './component/vaccine-center-component/details-vaccinecenter/details-vaccinecenter.component';
import { ListVaccinecenterComponent } from './component/vaccine-center-component/list-vaccinecenter/list-vaccinecenter.component';
import { UpdateVaccinecenterComponent } from './component/vaccine-center-component/update-vaccinecenter/update-vaccinecenter.component';
import { VaccineCenterViewComponent } from './component/vaccine-center-component/vaccine-center-view/vaccine-center-view.component';
import { CreateVaccineComponent } from './component/vaccine-component/create-vaccine/create-vaccine.component';
import { UpdateVaccineComponent } from './component/vaccine-component/update-vaccine/update-vaccine.component';
import { VaccineDetailsComponent } from './component/vaccine-component/vaccine-details/vaccine-details.component';
import { VaccineSearchComponent } from './component/vaccine-component/vaccine-search/vaccine-search.component';
import { VaccineViewComponent } from './component/vaccine-component/vaccine-view/vaccine-view.component';
import { VaccineViewwwComponent } from './component/vaccine-component/vaccine-viewww/vaccine-view.component';
import { CreateVaccineInventoryComponent } from './component/vaccine-inventory-component/create-vaccine-inventory/create-vaccine-inventory.component';
import { UpdateVaccineInventoryComponent } from './component/vaccine-inventory-component/update-vaccine-inventory/update-vaccine-inventory.component';
import { VaccineInventoryDetailsComponent } from './component/vaccine-inventory-component/vaccine-inventory-details/vaccine-inventory-details.component';
import { VaccineInventoryListComponent } from './component/vaccine-inventory-component/vaccine-inventory-list/vaccine-inventory-list.component';
import { VaccineInventoryViewComponent } from './component/vaccine-inventory-component/vaccine-inventory-view/vaccine-inventory-view.component';



const routes: Routes = [
  { path : '', redirectTo : 'adminlogin', pathMatch : 'full'},
  { path : 'adminlogin', component : AdminLoginComponent },
  { path : 'admin-view', component: AdminViewComponent, canActivate: [AuthenticationGuard]},

                   //Vaccine-Center
  { path : 'vaccinecenter-view', component :VaccineCenterViewComponent },
  { path: 'vaccinecenters', component: ListVaccinecenterComponent },
  { path: 'add', component: CreateVaccinecenterComponent },
  { path: 'update/:code', component: UpdateVaccinecenterComponent },
  { path: 'details/:code', component: DetailsVaccinecenterComponent },

                     //Vaccine
  { path: 'vaccine-view', component: VaccineViewComponent},
  { path: 'VaccineDetails', component: VaccineDetailsComponent},
  { path: 'viewAll', component: VaccineViewwwComponent},
  { path: 'add-vaccine', component: CreateVaccineComponent},
  { path: 'search/:vaccineName', component: VaccineSearchComponent},
  { path: 'updatevaccine/:id', component: UpdateVaccineComponent},

                     //Vaccine-Inventory
  { path : 'vaccine-inventory-view', component:VaccineInventoryViewComponent},
  { path: 'new/:code', component: CreateVaccineInventoryComponent },
  {path : 'inventories',component : VaccineInventoryListComponent},
  {path : 'updateinventory/:id', component : UpdateVaccineInventoryComponent},
  {path : 'inventorydetails/:id', component : VaccineInventoryDetailsComponent},

                     //User Mododules
  {path: 'user-login', component: AddVaccineRegistrationComponent},
  {path : 'new-member' , component : CreateMemberComponent},
  {path : 'member-list', component : MemberListComponent},
  {path : 'update-member/:id', component : UpdateMemberComponent},
  {path : 'details-member/:id', component : MemberDetailsComponent},
  {path : 'new-member-status/:id', component : AddMemberStatusComponent},
   { path: 'member-status-list', component: MemberStatusListComponent },
   { path: 'update-member-status/:id', component: UpdateMemberStatusComponent },
   { path: 'details-member-status/:id', component: GetMemberStatusDetailsComponent},
   { path: 'appointment', component: AppointmentListComponent },
  { path: 'new-appointment', component: CreateAppointmentComponent },
  { path: 'update-appointment/:bookingId', component: UpdateAppointmentComponent },
  { path: 'details-appointment/:bookingId', component: AppointmentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
