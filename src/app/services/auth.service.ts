import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, pipe, Subject, tap } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AutResponse } from '../models/autResponse';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiKey = "AIzaSyDWjf0iHC6woPgbMj2tTRAdUmFgbNUBSAg";
  loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.apiKey;
  signUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.apiKey;
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  SignUp(email: string, password: string) {
    return this.http.post<AutResponse>(this.signUpUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap((response) => {
        const expirationDate:Date = new Date(new Date().getTime() + (+response.expiresIn * 1000));
        console.log(expirationDate);
        

        const user: User = new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        );
        this.user.next(user);
      })
    );
  }

  Login(email: string, password: string) {
    return this.http.post<AutResponse>(this.loginUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap((response) => {
        const expirationDate:Date = new Date(new Date().getTime() + (+response.expiresIn * 1000));

        const user: User = new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        );       
        
        this.user.next(user);
      })
    );
  }

  Logout(){
    this.user.next(null);
  }

}
