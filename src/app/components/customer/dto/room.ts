export class RoomDTO {

   roomID;
   roomType;
   roomNo;
   oneDayPrice ;
   status;

  constructor(room?: any){
    room = room || {};

    this.roomID =room.roomID || null;
    this.roomType =room.roomType || '';
    this.roomNo =room.roomNo || '';
    this.oneDayPrice =room.oneDayPrice || '';
    this.status =room.status || '';


  }
}
