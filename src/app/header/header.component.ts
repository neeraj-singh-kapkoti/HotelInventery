import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
import { ConfigService } from '../Services/config.service';


@Component({
  selector: 'htl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  title: string = 'HINV'



  constructor(private roomService: RoomsService, private configservice: ConfigService) { }

  ngOnInit(): void {

  }

}
