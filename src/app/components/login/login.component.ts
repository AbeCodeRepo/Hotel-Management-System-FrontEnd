import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm : FormGroup;

  constructor(private authService : AuthService,
              private router : Router,
              private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.authService.loginStatus.subscribe((userDetails) =>{
      if (userDetails){
        this.router.navigate(['/admin/dashboard']);
        sessionStorage.setItem("userData", JSON.stringify(userDetails) )
      } else {
        alert("Login Failed..")
      }
    });

    this.loginForm = this.formBuilder.group({
      userEmail :['',Validators.required],
      password :['',Validators.required]
    })
  }

  onLogin(){

    let data = this.loginForm.getRawValue();
    // console.log("data",data)
     this.authService.login(data);
  }

  isValid(){
    return this.loginForm.valid;
  }
}
