import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../../services/room/room.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{


  rooms : any = [];

  constructor(private roomService : RoomService,
              private router : Router){}

  ngOnInit(): void {
    this.roomService.onRoomsChange.subscribe((rooms)=>
    {
      this.rooms = rooms;
    })
  }
  addEditRoom(room: any){
    if (room != null){
      sessionStorage.setItem("roomID", room.roomID);
    }else {
      sessionStorage.removeItem("roomID");
    }

    this.router.navigate(['/admin/rooms/add-edit'])
  }
}
