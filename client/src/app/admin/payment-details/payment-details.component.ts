import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  payments: any[] = [];
  public isLoading = false

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchpayments();
  }

  fetchpayments() {
    this.isLoading = true
    this.http.get<any[]>('http://localhost:3000/payments').subscribe(
      payments1 => {
        this.payments = payments1;
        console.log(payments1);
        this.isLoading = false
      },
      error => {
        console.error(error);
      }
    );
  }
  
}

