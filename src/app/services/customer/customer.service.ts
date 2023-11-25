import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements Resolve<any>{

  onCustomersChange = new Subject();

  constructor(private httpClient : HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any{
    this.getCustomers();
  }

  getCustomers(){
    this.httpClient.get('http://localhost:8080/customer/getAllCustomers')
      .subscribe((customers)=>{
        if (customers){
          this.onCustomersChange.next(customers);
        }

      })


    // this.httpClient.get('http://localhost:8080/customer/getAllCustomerWithSearch')
    //   .subscribe((customers)=>{
    //     if (customers){
    //       this.onCustomersChange.next(customers);
    //     }
    //
    //   })
  }
}
