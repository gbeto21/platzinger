import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  friendId: any;
  friends: User[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    this.friendId = this.activatedRoute.snapshot.params['uid']
    this.friends = this.userService.getFriends()
  }

  ngOnInit(): void {
  }

}
