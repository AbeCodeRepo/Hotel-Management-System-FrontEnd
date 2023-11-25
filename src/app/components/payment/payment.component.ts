import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  calculateForm : FormGroup;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.calculateForm = this.createForm()

  }

  createForm(){
    return this.formBuilder.group({
      daysValue:['',[Validators.required]],
      roomPrice : ['',[Validators.required]],
      totalPrice : ['',[Validators.required]]
    })
  }

  checkPrice(){
    let data = this.calculateForm.getRawValue();
    let daysValue = Number(data.daysValue);
    let roomPrice = Number(data.roomPrice);

    let totalPrice = null;

    totalPrice = daysValue * roomPrice;


    this.calculateForm.controls.totalPrice.setValue(totalPrice);

  }
}
