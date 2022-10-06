import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { RoomGuard } from './guards/room.guard';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes =
  [
    {
      path: '',
      component: RoomsComponent,
      canActivateChild: [RoomGuard],
      children: [
        { path: 'add', component: RoomsAddComponent },
        // { path: ':roomid', component: RoomsBookingComponent },
      ],
    },

  ];

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
  ],
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule, HeaderModule],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
