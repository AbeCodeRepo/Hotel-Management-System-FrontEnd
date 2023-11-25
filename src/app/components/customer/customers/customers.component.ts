import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer/customer.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  customers : any = [];

  constructor(private customerService : CustomerService,
              private router : Router){}

  ngOnInit(): void {
    this.customerService.onCustomersChange.subscribe((customers)=>
    {
      this.customers = customers;
    })
  }

  addEditCustomer(customer: any){

    if (customer != null){
      sessionStorage.setItem("customerID", customer.customerID);
    } else {
      sessionStorage.removeItem("customerID");
    }


    this.router.navigate(['/admin/customers/add-edit'])
  }
}
