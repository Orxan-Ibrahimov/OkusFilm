import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  isAuthicantitated:boolean = false;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

    this.auth.user.subscribe(data => {
      // if(data == null)
      // {
      //   this.isAuthicantitated = false;
      // }
      // else
      // this.isAuthicantitated = true;

      this.isAuthicantitated = !!data;
      

    });
  }

}
