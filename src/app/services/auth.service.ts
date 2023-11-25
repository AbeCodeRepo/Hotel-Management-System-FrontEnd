import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  logUrl = 'http://localhost:8080';

  loginStatus = new Subject();

  constructor( private httpClient : HttpClient) { }

  // getLogInfo (): Observable<any>{
  //   return this.httpClient.get<any>('http://localhost:8080/user/getLoggedUser')
  // }

  login(loginRQ:any){
    // this.loginStatus.next(status);
    this.httpClient.post('http://localhost:8080/user/getLoggedUser', loginRQ)
      .subscribe((userDetails)=>{
      // console.log("userDetails",userDetails)


        if (userDetails != null) {
          this.loginStatus.next(userDetails);


        }else {
          alert("Email or Password is Incorrect.");
        }


    });
  }
}
