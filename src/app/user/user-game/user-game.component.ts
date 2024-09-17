import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-user-game',
  standalone: true,
  imports: [
    MenuComponent
  ],
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
}