import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomsList } from '../Rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'htl-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent implements OnInit {

  room: RoomsList = {

    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    rating: 0
  }
  sucessMessage: string = '';



  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void { }


  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.sucessMessage = 'Room Added Successfully';
      roomsForm.resetForm({
        roomType: '',
        amenities: '',
        price: 0,
        photos: '',
        checkInTime: new Date(),
        checkOutTime: new Date(),
        rating: 0
      })
    });


  }

}
