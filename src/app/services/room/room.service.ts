import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService implements Resolve<any>{

  onRoomsChange = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  resolve(): Observable<any> | Promise<any> | any {
    this.getRooms();
  }

  getRooms(){
    this.httpClient.get('http://localhost:8080/room/getAllRooms')
      .subscribe((rooms)=>{
        if (rooms){
          this.onRoomsChange.next(rooms);
        }

      })
  }
}
