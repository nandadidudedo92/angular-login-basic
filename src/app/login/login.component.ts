import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = "";
  
  constructor(private _loginService: LoginService, private router: Router) { }


  ngOnInit() {
  }

  loginUser(){
    this._loginService.loginUserFromRemote(this.user).subscribe(
      data => {
      console.log(data.detail);
      this.user = data.datas;

      this.router.navigate(['/landingPage'],{state: {data: this.user}});


    }
      ,
      error => {
      console.log("Exception Occured");
      this.msg = "Something went wrong";
    }
    );

  }

  goRegis(){
    this.router.navigate(['/registration'])

  }
}
