import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = new User(0,"","");
  errorMessage = '';
  
  constructor(private _service : UserService, private _router : Router){}

  ngOnInit(){

  }

  loginUser() {
    this._service.UserLoginFromBackend(this.user).subscribe(
    data => {
      console.log("response recived");
      this._router.navigate(['/userClientList']);
    },
    error => {
      console.log("exception occured");
      this.errorMessage="Invalid User, Please enter valid email and Password";

    }
    
  )
  }
}
