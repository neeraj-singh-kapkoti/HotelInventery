import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './Guards/login.guard';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsRoutingModule } from './rooms/rooms-routing.module';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard] },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard]
  },
  {
    path: 'booking/:roomid',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    canActivate: [LoginGuard], canLoad: [LoginGuard]
  },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },

  // agar koyi bhi path match nahi hua toh Not found page / component par redirect karega, eese kuch bhi wrong url enter karne par after main url. this is called wildcard route.
  { path: 'container ', component: ContainerComponent, canActivate: [LoginGuard] },
  { path: '**', component: NotFoundComponent, canActivate: [LoginGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
