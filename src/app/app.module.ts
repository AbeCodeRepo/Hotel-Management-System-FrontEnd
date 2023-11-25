import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomersComponent } from './components/customer/customers/customers.component';
import { RoomsComponent } from './components/room/rooms/rooms.component';
import { StaffsComponent } from './components/staff/staffs/staffs.component';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerAddEditComponent } from './components/customer/customer-add-edit/customer-add-edit.component';
import { RoomAddEditComponent } from './components/room/room-add-edit/room-add-edit.component';
import { StaffAddEditComponent } from './components/staff/staff-add-edit/staff-add-edit.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    CustomersComponent,
    RoomsComponent,
    StaffsComponent,
    DashboardComponent,
    CustomerAddEditComponent,
    RoomAddEditComponent,
    StaffAddEditComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
