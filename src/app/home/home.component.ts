import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = new User();

  constructor(private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit(): void {
    if (!history.state) {
      console.log("asu")
      this.router.navigate(['/login']);
    } else {
    const s = history.state;
    this.user = s.data
    console.log(s);
  }
  }

}
