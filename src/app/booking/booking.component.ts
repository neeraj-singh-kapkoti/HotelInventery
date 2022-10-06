import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../Services/config.service';

@Component({
  selector: 'htl-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private configServices: ConfigService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group({

      roomId: new FormControl({ value: roomId, disabled: true }, { validators: [Validators.required] }),
      guestEmail: ['', [Validators.required, Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['', [Validators.required, Validators.minLength(5)]],
      address: this.fb.group({
        addressLine1: ['', { validators: [Validators.required] }],
        addressLine2: [''],
        city: ['', { validators: [Validators.required] }],
        state: [''],
        country: [''],
        zipcode: [''],
      }),
      tnc: new FormControl(false, [Validators.requiredTrue]),
      guests: this.fb.array([
        this.fb.group({ guestName: ['', { validators: [Validators.required] }], age: new FormControl('') }),
      ])

    }
    );
  }



  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }
  removeGuest(index: number) {
    this.guests.removeAt(index);
  }

  addGuest() {
    this.guests.push(this.fb.group({ guestName: ['', { validators: [Validators.required] }], age: new FormControl('') }));
  };
}
