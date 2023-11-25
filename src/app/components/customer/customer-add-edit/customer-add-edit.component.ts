import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerAddEditService} from "../../../services/customer/customer-add-edit.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomerDTO} from "../dto/customer";
import * as _ from 'underscore';

@Component({
  selector: 'app-customer-add-edit',
  templateUrl: './customer-add-edit.component.html',
  styleUrls: ['./customer-add-edit.component.css']
})
export class CustomerAddEditComponent implements OnInit, OnDestroy{

  customerForm : FormGroup;
  customer = new CustomerDTO();
  pageType : String;

  onCustomerChangeSub = new Subscription();



  constructor(private customerAddEditService : CustomerAddEditService,
              private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.onCustomerChangeSub = this.customerAddEditService.customer
      .subscribe((customer)=>{
      if (!_.isEmpty(customer)) {
        this.customer = new CustomerDTO(customer);
        this.pageType = 'edit';
      }else {
        this.customer = new CustomerDTO();
        this.pageType = 'new';
      }
     this.customerForm = this.createForm();
    })
  }

  ngOnDestroy(): void {
    this.onCustomerChangeSub.unsubscribe();
  }


  createForm(){
    return this.formBuilder.group({
      customerID : [this.customer.customerID],
      customerName : [this.customer.customerName],
      mobileNo : [this.customer.mobileNo],
      address : [this.customer.address],
      status : [this.customer.status]
    })
  }


  saveData(){
    let data = this.customerForm.getRawValue();

      this.customerAddEditService.saveCustomer(data);
    }



}
