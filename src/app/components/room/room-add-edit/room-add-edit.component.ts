import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoomDTO} from "../../customer/dto/room";
import {Subscription} from "rxjs";
import {RoomAddEditService} from "../../../services/room/room-add-edit.service";
import * as _ from 'underscore';

@Component({
  selector: 'app-room-add-edit',
  templateUrl: './room-add-edit.component.html',
  styleUrls: ['./room-add-edit.component.css']
})
export class RoomAddEditComponent implements OnInit, OnDestroy{

  roomForm : FormGroup;
  room = new RoomDTO();
  pageType : String;

  onRoomChangeSub = new Subscription();



  constructor(private roomAddEditService : RoomAddEditService,
              private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.onRoomChangeSub = this.roomAddEditService.room
      .subscribe((room)=>{
        if (!_.isEmpty(room)) {
          this.room = new RoomDTO(room);
          this.pageType = 'edit';
          console.log("room",room)
        }else {
          this.room = new RoomDTO();
          this.pageType = 'new';
          console.log("room",room)
        }
        this.roomForm = this.createForm();
      })
  }

  ngOnDestroy(): void {
    this.onRoomChangeSub.unsubscribe();
  }


  createForm(){
    return this.formBuilder.group({
      roomID : [this.room.roomID],
      roomType : [this.room.roomType],
      roomNo : [this.room.roomNo],
      oneDayPrice : [this.room.oneDayPrice],
      status : [this.room.status]
    })
  }

  saveData(){
    let data = this.roomForm.getRawValue();

    this.roomAddEditService.saveRoom(data);
  }

}
