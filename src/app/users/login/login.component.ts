import { Component } from '@angular/core';
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
  email: string = '';
  password: string = '';
  
  constructor(private auth: AuthService) { }

  handleLogin() {
   const userList = JSON.parse(localStorage.getItem('users') || '[]');
   const isUserExisting = userList.some((user: User) => 
   user.email === this.email && user.password === this.password)
   if (isUserExisting) {
     this.auth.logIn(this.email);
     return;
   } else {
     alert('incorect data');
   }
 }
}
