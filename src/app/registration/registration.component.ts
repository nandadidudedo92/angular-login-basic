import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User()
  msg = "";
  detail = "";

  constructor(private _registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._registrationService.loginUserFromRemote(this.user).subscribe(
      data => {
      console.log("response recieved");
      this.detail = data.detail;

      if(this.detail.includes("Success")) {
        this.router.navigate(['/'])
      } else {
        this.msg = data.detail;
      }
    }
      ,
      error => {
      console.log("Exception Occured");
      
    }
    );

  }

}
