import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { AutResponse } from '../models/autResponse';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginMode: boolean = false;
  constructor(private authServise: AuthService, private alert: AlertifyService,private router:Router) { }
  
  ngOnInit(): void {
  }

  auth: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });

  ToogleMode() {
    this.loginMode = !this.loginMode;
  }
  Send() {
    let authResponse: Observable<AutResponse>;
    if (this.auth.value.email == null || this.auth.value.email == undefined || this.auth.value.email == "") {
      this.alert.error("email can't be empty")
      return;
    }
    else if (this.auth.value.password == null || this.auth.value.password == undefined || this.auth.value.password == "") {
      this.alert.error("password can't be empty")
      return;
    }

    if (this.loginMode) {
      authResponse = this.authServise.Login(this.auth.value.email, this.auth.value.password);
    }
    else {
      authResponse = this.authServise.SignUp(this.auth.value.email, this.auth.value.password);
    }

    authResponse.subscribe(data=>{
     this.router.navigate(['movies']);

    },err => {
      console.log(err);
    });    
  }
}
