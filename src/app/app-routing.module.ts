import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./components/admin-layout/admin-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {CustomersComponent} from "./components/customer/customers/customers.component";
import {RoomsComponent} from "./components/room/rooms/rooms.component";
import {StaffsComponent} from "./components/staff/staffs/staffs.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CustomerService} from "./services/customer/customer.service";
import {StaffService} from "./services/staff/staff.service";
import {RoomService} from "./services/room/room.service";
import {CustomerAddEditComponent} from "./components/customer/customer-add-edit/customer-add-edit.component";
import {RoomAddEditComponent} from "./components/room/room-add-edit/room-add-edit.component";
import {StaffAddEditComponent} from "./components/staff/staff-add-edit/staff-add-edit.component";
import {CustomerAddEditService} from "./services/customer/customer-add-edit.service";
import {RoomAddEditService} from "./services/room/room-add-edit.service";
import {StaffAddEditService} from "./services/staff/staff-add-edit.service";
import {PaymentComponent} from "./components/payment/payment.component";

const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path :'login',
    component : LoginComponent
  },
  {
    path  :'admin',
    component : AdminLayoutComponent,
    children:[{
      path:'dashboard',
      component: DashboardComponent

    },
      {
      path:'customers',
      component: CustomersComponent,
        resolve : {
        data : CustomerService
        }
    },
      {
        path: 'customers/add-edit',
        component : CustomerAddEditComponent,
        resolve : {
          data : CustomerAddEditService
        }
      },
      {
      path:'rooms',
      component: RoomsComponent,
        resolve : {
          data : RoomService
        }
    },
      {
        path: 'rooms/add-edit',
        component : RoomAddEditComponent,
        resolve : {
          data : RoomAddEditService
        }
      },
      {
        path : 'staffs',
        component : StaffsComponent,
        resolve : {
          data : StaffService
        }
      },{
        path: 'staffs/add-edit',
        component : StaffAddEditComponent,
        resolve : {
          data : StaffAddEditService
        }
      },{
        path:'payment',
        component: PaymentComponent,

        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
