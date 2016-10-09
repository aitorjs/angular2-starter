import { Component } from '@angular/core';
import { User } from './shared/models/user'

@Component ({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styles: ['./app/app.component.css']
})

export class AppComponent {
  message: string = 'Hello';
  users: User[] = [
    { id: 25, name: 'Chris', username: 'chris' },
    { id:26, name: 'Nick', username: 'twitnick' },
    { id:27, name: 'Holly', username: 'hollynick' }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
    
  }
}
