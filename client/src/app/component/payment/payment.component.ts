import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  Payment={
    cardNumber:"",
    expiryDate: "",
    cvv: "",
    name:""

  };


  constructor(private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
  submitForm(form: any) {
    this.http.post('http://localhost:3000/payment', this.Payment).subscribe(
      (response) => {
        console.log('Payment done  successfully:', response);
        alert("Payment done successfully")
        
      },
      (error) => {

        console.log('Error submitting user data:', error);
        alert("Payment denied")
      }
    );
    form.reset();
  }

}
