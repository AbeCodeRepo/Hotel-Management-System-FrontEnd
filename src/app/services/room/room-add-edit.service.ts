import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Resolve} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomAddEditService implements Resolve<any> {

  room = new BehaviorSubject({});


  constructor( private httpClient : HttpClient) { }

  resolve() : Observable<any> | Promise<any> | any{
    this.getRoomByID();
  }

  getRoomByID(){

    let roomID = sessionStorage.getItem("roomID");

    if (roomID !=null){
      this.httpClient.get(`http://localhost:8080/room/getRoomByID/${roomID}`)
        .subscribe((room)=>{
          this.room.next(room);
        })
    }else {
      this.room.next({});
    }
  }

  saveRoom(data : any){
    this.httpClient.post('http://localhost:8080/room/addRoom', data)
      .subscribe((room)=>{
        this.room.next(room);

        alert("Saved Successfully")
      })
  }
}
