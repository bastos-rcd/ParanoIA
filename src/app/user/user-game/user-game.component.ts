import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../menu/menu.component';
import { ProgressComponent } from '../../game/progress/progress.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { CrewmateComponent } from '../crewmate/crewmate.component';
import { ImpostorComponent } from '../impostor/impostor.component';

@Component({
  selector: 'app-user-game',
  standalone: true,
  imports: [
    MenuComponent,
    ProgressComponent,
    CrewmateComponent,
    ImpostorComponent,
    CommonModule
  ],
  templateUrl: './user-game.component.html',
  styleUrl: './user-game.component.css'
})

export class UserGameComponent {
  public isShowing: boolean = false;

  public user: User = new User("", false, "");

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('name')) {
      this.router.navigateByUrl('/login');
    }

    this.userService.getUser(localStorage.getItem('name')!).subscribe(user => {
      this.user = new User(user.name, user.role, user.tasks);
    });
  }

  public onShow(): void {
    this.isShowing = !this.isShowing;
  }
}