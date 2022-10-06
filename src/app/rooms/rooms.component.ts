import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Rooms, RoomsList } from './Rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service'
import { HttpEventType } from '@angular/common/http';
import { catchError, of, Subject } from 'rxjs';
import { ConfigService } from '../Services/config.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'htl-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomsService]

})
export class RoomsComponent implements OnInit, AfterViewInit {

  roomList!: RoomsList[];
  constructor(private roomsService: RoomsService, private configservice: ConfigService) { }
  // totalbytes: number = 0;



  Room: string = "this is my room";
  numberOfRooms = '10';
  hideRooms = true;
  btn = "Hide";
  selectedRoom!: RoomsList;




  priceFilter = new FormControl(0);

  rooms$ = this.roomsService.getRooms$;



  addRoom() {
    const room: RoomsList = {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };

    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomsList = {
      roomNumber: 3,
      roomType: 'pppppppoom',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });

  }

  deleteRoom() {
    this.roomsService.delete('2').subscribe((data) => {
      this.roomList = data;
    });
  }



  rooms: Rooms = {
    availableRooms: 20,
    bookedRooms: 5,
    totalRooms: 30
  }




  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;


  ngOnInit(): void {


    // this.roomsService.getPhotos().subscribe((event) => {
    //   console.log(event);
    //   switch (event.type) {
    //     case HttpEventType.Sent: {
    //       console.log('Request has been made!');
    //       break;
    //     }
    //     case HttpEventType.ResponseHeader: {
    //       console.log('Request success');
    //       break;
    //     }
    //     case HttpEventType.DownloadProgress: {
    //       this.totalbytes += event.loaded;
    //       break;
    //     }
    //     case HttpEventType.Response: {
    //       console.log(event.body);
    //       break;
    //     }

    //   }
    // });



    this.roomsService.getRooms$.subscribe((data) => {
      this.roomList = data;
    });

  }
  ngAfterViewInit() {
    console.log(this.headerComponent);
  }


  toggle() {

    this.hideRooms = !this.hideRooms;
    if (this.hideRooms == true) {
      this.btn = 'Hide';
    }
    if (this.hideRooms != true) {
      this.btn = 'Show';
    }

  }
  selectRoom(room: RoomsList) {
    this.selectedRoom = room;
  }

}
