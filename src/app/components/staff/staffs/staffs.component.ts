import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer/customer.service";
import {StaffService} from "../../../services/staff/staff.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit{

  staffs : any = [];

  constructor(private staffService : StaffService,
              private router : Router){}

  ngOnInit(): void {
    this.staffService.onStaffsChange.subscribe((staffs)=>
    {
      this.staffs = staffs;
    })
  }

  addEditStaff(staff: any){
    if (staff != null){
      sessionStorage.setItem("staffID", staff.staffID);
    }else {
      sessionStorage.removeItem("staffID");
    }

    this.router.navigate(['/admin/staffs/add-edit'])
  }
}
