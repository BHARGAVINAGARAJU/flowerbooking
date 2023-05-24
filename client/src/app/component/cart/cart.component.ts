import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  pname!: string;
  price!: number;
  image!: string;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pname = params['pname'];
      this.price = params['price'];
      this.image = params['image'];
    });
  }

redirectToPayment() {
  this.router.navigate(['/payment']), { }
}
}

