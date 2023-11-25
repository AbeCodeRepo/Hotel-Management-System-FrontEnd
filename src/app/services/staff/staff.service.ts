import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StaffService implements Resolve <any> {

  onStaffsChange = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  resolve(): Observable<any> | Promise<any> | any {
    this.getStaffs();
  }

  getStaffs(){
    this.httpClient.get('http://localhost:8080/staff/getAllStaffs')
      .subscribe((staffs)=>{
        if (staffs){
          this.onStaffsChange.next(staffs);
        }

      })
  }
}
