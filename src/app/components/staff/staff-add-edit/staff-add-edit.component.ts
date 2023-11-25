import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StaffDTO} from "../../customer/dto/staff";
import {Subscription} from "rxjs";
import {StaffAddEditService} from "../../../services/staff/staff-add-edit.service";
import * as _ from 'underscore';

@Component({
  selector: 'app-staff-add-edit',
  templateUrl: './staff-add-edit.component.html',
  styleUrls: ['./staff-add-edit.component.css']
})
export class StaffAddEditComponent implements OnInit, OnDestroy{


  staffForm : FormGroup;
  staff = new StaffDTO();
  pageType : String;

  onStaffChangeSub = new Subscription();



  constructor(private staffAddEditService : StaffAddEditService,
              private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.onStaffChangeSub = this.staffAddEditService.staff
      .subscribe((staff)=>{
        if (!_.isEmpty(staff)) {
          this.staff = new StaffDTO(staff);
          this.pageType = 'edit';
        }else {
          this.staff = new StaffDTO();
          this.pageType = 'new';
        }
        this.staffForm = this.createForm();
      })
  }

  ngOnDestroy(): void {
    this.onStaffChangeSub.unsubscribe();
  }


  createForm(){
    return this.formBuilder.group({


      staffID : [this.staff.staffID],
      name : [this.staff.name],
      address : [this.staff.address],
      email : [this.staff.email],
      mobileNo : [this.staff.mobileNo],
      gender : [this.staff.gender],
      position : [this.staff.position],
      salary : [this.staff.salary],
      status : [this.staff.status],

    })
  }

  saveData(){
    let data = this.staffForm.getRawValue();

    this.staffAddEditService.saveStaff(data);
  }
}
