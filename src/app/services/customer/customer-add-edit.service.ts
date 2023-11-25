import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CustomerAddEditService implements Resolve<any>{

  customer = new BehaviorSubject({});
  // customer = new Subject();

  constructor( private httpClient : HttpClient) { }

  resolve() : Observable<any> | Promise<any> | any{
    this.getCustomerByID();
  }

  getCustomerByID(){

    let customerID = sessionStorage.getItem("customerID");

    if (customerID !=null){
      this.httpClient.get(`http://localhost:8080/customer/getCustomerByID/${customerID}`)
        .subscribe((customer)=>{
          this.customer.next(customer);
        })
    }else {
      this.customer.next({});
    }
  }

  saveCustomer(data : any){
    this.httpClient.post('http://localhost:8080/customer/addCustomer', data)
      .subscribe((customer)=>{
        this.customer.next(customer);

        alert("Saved Successfully")
      })
  }

  // updateCustomer(data : any){
  //   this.httpClient.put('http://localhost:8080/customer/updateCustomer', data)
  //     .subscribe((customer)=>{
  //       this.customer.next(customer);
  //     })
  // }
}
