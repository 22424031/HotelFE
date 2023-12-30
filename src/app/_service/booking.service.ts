import { Injectable } from '@angular/core';
import { HttpClient } from '@microsoft/signalr';
import { Booking } from '../models/booking.model ';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development'; 
import { ReservationStatus } from '../models/reservationStatus.model';

export class BookingService {

  private bookingForm: any;
  constructor(private httpclient: HttpClient) {


   }

  setBookingFormData(data: any) {
    this.bookingForm = data;
  }

  getbookingForm() {
    return this.bookingForm;
  }
}
