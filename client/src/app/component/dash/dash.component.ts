import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onlogout(){

    localStorage.clear()
  
    this.route.navigate(['/login'])
    alert('logout sucessful')
   }


}
