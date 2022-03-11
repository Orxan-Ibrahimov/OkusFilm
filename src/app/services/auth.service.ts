import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, pipe, retry, Subject, tap } from 'rxjs';
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

  constructor(private http: HttpClient,private router:Router) { }

  SignUp(email: string, password: string) {
    return this.http.post<AutResponse>(this.signUpUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap((response) => {
        this.handleAuth(response.email, response.localId, response.idToken, +response.expiresIn);
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
        this.handleAuth(response.email, response.localId, response.idToken, +response.expiresIn);
      })
    );
  }

  AutoLogin() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user)
      return;      

    const loadedUser = new User(user.email, user.id, user._token, new Date(user._tokenExpirationDate));

    if (loadedUser.token)
     {
       console.log('okus');
       this.user.next(loadedUser);
       
     }
  }

  Logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('user');

  }

  handleAuth(email: string, id: string, token: string, expires: number) {
    const expirationDate: Date = new Date(new Date().getTime() + (expires * 1000));

    const user: User = new User(
      email,
      id,
      token,
      expirationDate
    );
    this.user.next(user);

    localStorage.setItem("user", JSON.stringify(user));
    
  }

}
