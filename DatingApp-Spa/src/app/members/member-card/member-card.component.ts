import { AlertifyService } from './../../services/alertify.service';
import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input()
  user: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  sendLike(id: number) {
    const userId = this.authService.decodedToken.nameid;
    this.userService.sendLike(userId, id).subscribe(data => {
      this.alertify.success(`You have liked: ${this.user.knownAs}`);
    }, error => {
      this.alertify.error(error);
    });
  }
}
