import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Task1Component } from '../task-1/task-1.component';
import { Task2Component } from '../task-2/task-2.component';
import { Task3Component } from '../task-3/task-3.component';
import { Task4Component } from '../task-4/task-4.component';
import { Task5Component } from '../task-5/task-5.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    MenuComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    CommonModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  public readonly tasksName: string[] = [
    'Coffre fort',
    'Électricité',
    'Jauge',
    'Tri couleurs',
    'Mémoire couleurs',
    'Code aléatoire',
    'Morpion',
    'Associer l\'image à un mot',
    '100%',
    'Tirer sur les cibles',
    'Motif',
    'Mathématiques',
    'Intérupteurs dans l\'ordre',
    'Quizz',
    'Ordre croissant',
    'Oxygène',
    'Mise à jour',
    'Thermostat',
    'Identité',
    'Scan',
  ];

  public numTask: number = 0;

  public user: User = new User("", false, "");

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem("name")) {
      this.router.navigateByUrl('/login');
    }

    this.userService.getUser(localStorage.getItem('name')!).subscribe(user => {
      this.user = new User(user.name, user.role, user.tasks);
    });

    this.numTask = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (this.numTask && this.numTask < 1 && this.numTask > 20) {
      this.router.navigateByUrl('/not-found');
    }
  }
}