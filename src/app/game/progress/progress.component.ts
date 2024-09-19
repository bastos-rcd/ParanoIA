import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})

export class ProgressComponent {
  public game: Game = new Game(0, 1);

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.getGame().subscribe(data => {
      this.game = new Game(data.done, data.todo);
    });
  }

  public getProgress(): number {
    return this.game.getDone() / this.game.getTodo() * 100;
  }
}