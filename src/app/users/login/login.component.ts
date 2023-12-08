import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/api/api.service';
import { AuthService } from 'src/app/auth.service';

export interface User { 
  email: string;
  password: string;

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    email: '',
    password:  '',
  } 
 
  constructor(
    private auth: AuthService, 
    private router: Router
    ) { }

  handleLogin() {
   const userList = JSON.parse(localStorage.getItem('users') || '[]');
   const isUserExisting = userList.some((user: User) => 
   user.email === this.user.email && user.password === this.user.password)
   if (isUserExisting) {
     this.auth.logIn(this.user.email);
     return;
   } else {
     alert('incorect data');
   }
   if (!isUserExisting) {
    alert('User not found');   
    this.router.navigate(['register']);
    return;
  }
   console.log();
 }
 
}
