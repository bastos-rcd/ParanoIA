import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-game',
  standalone: true,
  imports: [],
  templateUrl: './user-game.component.html',
  styleUrl: './user-game.component.css'
})

export class UserGameComponent {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('name')) {
      this.router.navigateByUrl('/login');
    }
  }

  public onLogout() {
    localStorage.removeItem('name');
    this.router.navigateByUrl('/login');
  }
}