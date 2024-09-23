import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { Game } from '../../models/game';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-new-game',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './new-game.component.html',
  styleUrl: './new-game.component.css'
})

export class NewGameComponent {
  private password: string = 'F31hT';

  public usersName: string = '';

  private users: User[] = [];
  private game: Game = new Game(0, 0);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['password'] !== this.password) {
        this.router.navigateByUrl("/login")
      }
    });

    this.userService.getUsers().subscribe(data => {
      this.usersName = data.map(user => user.name).join(':');
    });
  }

  private setImpostors(): void {
    const impostors: number[] = [];
    const nbPlayers: number = this.users.length;
    const nbImpostors: number = nbPlayers <= 7 ? 1 : nbPlayers <= 10 ? 2 : 3;

    for (let i = 0; i < nbImpostors; i++) {
      let impostor: number = Math.floor(Math.random() * nbPlayers);
      if (!impostors.includes(impostor)) {
        impostors.push(impostor);
      } else {
        i--;
      }
    }
    for (let i = 0; i < nbPlayers; i++) {
      if (impostors.includes(i)) {
        this.users[i].setRole(true);
      }
    }
  }

  private setTasks(): void {
    for (let player of this.users) {
      if (!player.getRole()) {
        const tasks: number[] = [];
        const nbTasks: number = 7;
        const nbTotalTasks: number = 20;
        this.game.setTodo(this.game.getTodo() + nbTasks);
        for (let i = 0; i < nbTasks; i++) {
          let task: number = Math.floor(Math.random() * nbTotalTasks) + 1;
          if (!tasks.includes(task)) {
            tasks.push(task);
          } else {
            i--;
          }
        }
        player.setTasks(tasks.join('-').split('-'));
      }
    }
  }

  public onSubmit() {
    this.users = this.usersName.split(':').map(name => new User(name, false, ""));

    this.setImpostors();
    this.setTasks();

    this.userService.setUsers(this.users);
    this.gameService.setGame(this.game);

    this.router.navigateByUrl("/");
  }
}