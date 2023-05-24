import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  list: any[] = [];
  public isLoading = false

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.isLoading = true
    this.http.get<any[]>('http://localhost:3000/product').subscribe(
      users => {
        this.list = users;
        console.log(users);
        this.isLoading = false
      },
      error => {
        console.error(error);
      }
    );
  }

  redirectToCart(lists: any) {
    this.router.navigate(['/addtocart'], { queryParams: { pname: lists.pname,price:lists.price,image:lists.image } });
  
  
}
redirectToPaymentPage() {
  this.router.navigate(['/payment']), { }
}
}
  


