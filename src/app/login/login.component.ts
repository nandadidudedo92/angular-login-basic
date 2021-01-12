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
  // private currentUserSubject: BehaviorSubject<User>;

  user = new User();
  msg = "";
  detail = "";
  
  constructor(private _loginService: LoginService, private router: Router) { }


  ngOnInit() {
  }

  loginUser(){
    this._loginService.loginUserFromRemote(this.user).subscribe(
      data => {
      console.log(data.detail);
      this.detail = data.detail;

      if (this.detail.includes("Success") ) {
        this.user = data.datas;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.router.navigate(['/landingPage'],{state: {data: this.user}});
      } else {
        this.msg = data.detail;
      }

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
