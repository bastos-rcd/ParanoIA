import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-impostor',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './impostor.component.html',
  styleUrl: './impostor.component.css'
})

export class ImpostorComponent {
  @Input()
  public user: User = new User("", false, "");

  public impostors: User[] = []

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.impostors = [];
      users.forEach(user => {
        if (user.name !== this.user.getName() && user.role === true) {
          this.impostors.push(new User(user.name, user.role, user.tasks));
        }
      });
    });
  }
}