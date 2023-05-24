import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product={
    pname: "",
    price: "",
    image: ""
    

  };

  constructor(private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
  submitForm(form: any) {
    this.http.post('http://localhost:3000/add-product', this.product).subscribe(
      (response) => {
        console.log('Product data added  successfully:', response);
        alert("Added successfully")
        
      },
      (error) => {

        console.log('Error submitting user data:', error);
        alert("Not added")
      }
    );
    form.reset();
  }

}
