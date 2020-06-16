import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[];
  constructor() {
    let users : User[]= [
      { uid: "1",  nick: 'Eduardo', subnick: 'Mi mensaje personal',  age: 28, email: 'eduardo@platzi.com', friend: true, status: "busy"},
      { uid: "2", nick: 'Yuliana', subnick: 'Mi mensaje personal', age: 25, email: 'yuliana@platzi.com', friend: true, status: "online"},
      { uid: "3", nick: 'Freddy', subnick: 'Mi mensaje personal', age: 28, email: 'freddy@platzi.com', friend: false, status: "offline"},
      { uid: "4", nick: 'Cl82', subnick: 'Mi mensaje personal', age: 23, email: 'clas82@platzi.com', friend: false, status: "away"}
    ];
    
    this.friends = users
  }

  getFriends(){
    return this.friends
  }

  getFriend(uid: any)
  {
    const foundUser = this.friends.find( (friend) => {
      return friend.uid == uid;
    });
    return foundUser;
  }

}
