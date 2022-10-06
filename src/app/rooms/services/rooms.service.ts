import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError, of, shareReplay, Subject } from 'rxjs';
import { AppConfig } from '../../AppConfig/appConfig.Interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { RoomsList } from '../Rooms';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RoomsService {



  test: string = "this is my test";



  roomList: RoomsList[] = [];
  roomsService: any;

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {

    console.log(this.config.apiEndpoint);


  }



  error$: Subject<string> = new Subject<string>();
  getError$ = this.error$.asObservable();

  headerss = new HttpHeaders({ 'Pooja': 'How are you' }).append('Neeraj', 'Love you').append('Pooja', 'Love you too').append('Neeraj', 'when we will meet').append('Pooja', 'soon').append('Neeraj', 'I hope so').append('Puja', 'I hope so too').append('nee_aj', 'I love you').append('pooja', 'I love you too');
  getRooms$ = this.http.get<RoomsList[]>('api/rooms', { headers: this.headerss, }).pipe(
    shareReplay(1)
  );



  rooms$ = this.getRooms$.pipe(
    catchError(err => {
      console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );
  editRoom(room: RoomsList) {
    return this.http.put<RoomsList[]>(`api/rooms/${room.roomNumber}`, room);
  }


  addRoom(room: RoomsList) {
    return this.http.post<RoomsList[]>('api/rooms', room);
  }


  getRooms() {
    return this.http.get<RoomsList[]>('api/rooms');
  }

  delete(id: string) {
    return this.http.delete<RoomsList[]>(`api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      });
    return this.http.request(request);

  }

}
