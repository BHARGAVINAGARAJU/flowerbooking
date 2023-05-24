import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  user = {
  firstname: "",
  lastname: "",
  Male:"",
  phone:"",
  address:"",
  email: "",
  password: "",
  repass: ""
};

constructor(private http: HttpClient,private route:Router) {}

submitForm(form: any) {
  this.http.post('http://localhost:3000/register', this.user).subscribe(
    (response) => {
      console.log('User data submitted successfully:', response);
      alert("registered successfully")
      this.route.navigate(['/login']);
    },
    (error) => {
      console.log('Error submitting user data:', error);
      alert("registration unsucessfull")
    }
  );
  form.reset();
}


}