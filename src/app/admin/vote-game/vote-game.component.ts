import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-vote-game',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './vote-game.component.html',
  styleUrl: './vote-game.component.css'
})

export class VoteGameComponent {
  public users: User[] = [];

  constructor(
    private userService: UserService
  ) {
    this.userService.getUsers().subscribe(data => {
      this.users = data.map(user => new User(user.name, user.role, user.tasks, user.eliminated));
      this.users = this.users.filter(user => !user.getEliminated());
    });
  }

  public onSelect(event: any) {
    const user = event.target.value;

    this.userService.setEliminated(user);
  }
}