import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  public name: string = '';

  public error: string = '';

  private users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data.map(user => new User(user.name, user.role, user.tasks, user.eliminated));
    });
  }

  public onSubmit(): void {
    const user = this.users.find(user => user.getName() === this.name);

    if (user) {
      localStorage.setItem('name', user.getName());
      this.router.navigateByUrl('/');
    } else {
      this.error = 'Ce joueur n\'existe pas';
    }
  }
}