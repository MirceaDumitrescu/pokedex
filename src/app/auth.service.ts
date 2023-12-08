import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private userEmail = new BehaviorSubject<string | null>(this.getEmail());

  constructor() { }

  private checkLoginStatus() {
    return !!localStorage.getItem('loggedUser');
  }

  get isLoggedIn$() {
    return this.isLoggedIn.asObservable();
  }
  logIn( email: string) {
    localStorage.setItem('loggedUser', JSON.stringify(email));
    this.isLoggedIn.next(true);
  }
  logOut() {
    localStorage.removeItem('loggedUser');
    this.isLoggedIn.next(false);
  }
  private getEmail() {
    return localStorage.getItem('loggedUser');
  }
  get email$() {
    return this.userEmail.asObservable();
  }
}
