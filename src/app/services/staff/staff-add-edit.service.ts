import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StaffAddEditService implements Resolve<any>{

  staff = new BehaviorSubject({});


  constructor( private httpClient : HttpClient) { }

  resolve() : Observable<any> | Promise<any> | any{
    this.getStaffByID();
  }

  getStaffByID(){

    let staffID = sessionStorage.getItem("staffID");

    if (staffID !=null){
      this.httpClient.get(`http://localhost:8080/staff/getStaffByID/${staffID}`)
        .subscribe((staff)=>{
          this.staff.next(staff);
        })
    }else {
      this.staff.next({});
    }
  }

  saveStaff(data : any){
    this.httpClient.post('http://localhost:8080/staff/addStaff', data)
      .subscribe((staff)=>{
        this.staff.next(staff);

        alert("Saved Successfully")
      })
  }
}
