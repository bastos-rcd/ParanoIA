import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})

export class UpdateComponent {
  @Input()
  public numTask: number = 0;

  constructor(
    private router: Router,
    private userService: UserService,
    private gameService: GameService
  ) { }

  public onUpdate() {
    this.gameService.updateGame();
    this.userService.removeTask(localStorage.getItem('name')!, this.numTask);
    this.router.navigateByUrl('/');
  }
}