import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminLoginService } from '../admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent  implements OnInit {

  admin = new Admin(0,"","","");
  errorMessage = '';
  
  constructor(private _service : AdminLoginService, private _router : Router){}

  ngOnInit(){

  }

  loginAdmin() {
    this._service.AdminLoginFromBackend(this.admin).subscribe(
    data => {
      console.log("response recived");
      console.log("login successful");
      this._router.navigate(['/clientlist']);
    },
    error => {
      console.log("exception occured");
      this.errorMessage="Invalid User, Please enter valid email and Password";

    }
    
  )
  }
}