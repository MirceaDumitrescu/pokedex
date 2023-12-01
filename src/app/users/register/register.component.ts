import { Component } from '@angular/core';
import { User } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email!: string;
  password!: string;

  user = {
    email: '',
    password: ''
  };
 

  handleRegister() {
    const currentUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (currentUsers.some((user: User) => user.email === this.email)) {
      alert('This email is already existing!');
      return;
    }
    const newUsersList = [
      ...currentUsers,
      { email: this.user.email, password: this.user.password },
    ];
    localStorage.setItem('users', JSON.stringify(newUsersList));
    this.user.email = '';
    this.user.password = '';
  }
}
