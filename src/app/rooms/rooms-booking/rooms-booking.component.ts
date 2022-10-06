import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'htl-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  id!: number;

  id$ = this.router.paramMap.pipe(
    map((params) => params.get('roomid'))
  )
  // router is also kind of observable which is used to get the data from the url and pass it to the component as a parameter.  this is called dependency injection. 
  // paramMap is kind like a dictionary which contains the key value pair of the url.
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
