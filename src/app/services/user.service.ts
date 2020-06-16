import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[];
  constructor() {
    let users : User[]= [
      { uid: "1",  nick: 'Eduardo', subnick: 'Mi mensaje personal',  age: 28, email: 'eduardo@platzi.com', friend: true},
      { uid: "2", nick: 'Yuliana', subnick: 'Mi mensaje personal', age: 25, email: 'yuliana@platzi.com', friend: true},
      { uid: "3", nick: 'Freddy', subnick: 'Mi mensaje personal', age: 28, email: 'freddy@platzi.com', friend: false}
    ];
    
    this.friends = users
  }

  getFriends(){
    return this.friends
  }

}
