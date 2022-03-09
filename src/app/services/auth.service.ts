import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AutResponse } from '../models/autResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   apiKey = "AIzaSyDWjf0iHC6woPgbMj2tTRAdUmFgbNUBSAg";
   loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.apiKey;
   signUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.apiKey;


  constructor(private http:HttpClient) { }

  SignUp(email:string, password:string):Observable<AutResponse>{
    return this.http.post<AutResponse>(this.signUpUrl,{
      email:email,
      password:password
    }
    );
  }

  Login(email:string, password:string):Observable<AutResponse>{
    return this.http.post<AutResponse>(this.loginUrl,{
      email:email,
      password:password
    });
  }


}
