import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-payment-cash',
  templateUrl: './payment-cash.component.html',
  styleUrls: ['./payment-cash.component.scss']
})
export class PaymentCashComponent implements OnInit {
  constructor(private apiservice:ApiService){
    
  }
  ngOnInit(): void {
    
  }

}
