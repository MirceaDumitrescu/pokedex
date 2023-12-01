import { Component } from '@angular/core';
import { User } from '../login/login.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent {
  email!: string;  
  password!: string;
  currentUsers!: User[];
  loggedUser!: string;
  
  

  ngOnInit() {
    this.currentUsers = JSON.parse(localStorage.getItem('users') || '[]');
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '');
    if (!this.loggedUser) return;
    const fullUserData = this.currentUsers.find(
    (user: User) => user.email === this.loggedUser);
    if (!fullUserData) return;   
    this.email = fullUserData.email;
    this.password = fullUserData.password;   
  }

  handleProfile(){      
    const userIndex = this.currentUsers.findIndex(
      (user: User) => user.email === this.loggedUser
    );
    if (userIndex !== -1) {
      this.currentUsers[userIndex] = { 
        email: this.email,
        password: this.password
      };
    }
   
    localStorage.setItem('users', JSON.stringify(this.currentUsers));
  }
 
}
