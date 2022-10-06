import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomsList } from '../Rooms';

@Component({
  selector: 'htl-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomsList[] | null = [];

  @Output() selectedRoom = new EventEmitter<RoomsList>();

  constructor() { }

  ngOnInit(): void { }

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room);
  }

}
