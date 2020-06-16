import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends: User[];

  constructor() {
    let users : User[]= [
      { uid: "1",  nick: 'Eduardo', subnick: 'Mi mensaje personal',  age: 28, email: 'eduardo@platzi.com', friend: true},
      { uid: "2", nick: 'Yuliana', subnick: 'Mi mensaje personal', age: 25, email: 'yuliana@platzi.com', friend: true},
      { uid: "3", nick: 'Freddy', subnick: 'Mi mensaje personal', age: 28, email: 'freddy@platzi.com', friend: false}
    ];
    
    this.friends = users

   }

  ngOnInit(): void {
  }

}
