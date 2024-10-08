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
import { Task6Component } from '../task-6/task-6.component';
import { Task7Component } from '../task-7/task-7.component';
import { Task8Component } from '../task-8/task-8.component';
import { Task9Component } from '../task-9/task-9.component';
import { Task10Component } from '../task-10/task-10.component';
import { Task11Component } from '../task-11/task-11.component';
import { Task12Component } from '../task-12/task-12.component';
import { Task13Component } from '../task-13/task-13.component';
import { Task14Component } from '../task-14/task-14.component';
import { Task15Component } from '../task-15/task-15.component';
import { Task16Component } from '../task-16/task-16.component';
import { Task17Component } from '../task-17/task-17.component';
import { Task18Component } from '../task-18/task-18.component';
import { Task19Component } from '../task-19/task-19.component';
import { Task20Component } from '../task-20/task-20.component';

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
    Task6Component,
    Task7Component,
    Task8Component,
    Task9Component,
    Task10Component,
    Task11Component,
    Task12Component,
    Task13Component,
    Task14Component,
    Task15Component,
    Task16Component,
    Task17Component,
    Task18Component,
    Task19Component,
    Task20Component,
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

  public user: User = new User("", false, "", false);

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
      this.user = new User(user.name, user.role, user.tasks, user.eliminated);
    });

    this.numTask = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (this.numTask && this.numTask < 1 && this.numTask > 20) {
      this.router.navigateByUrl('/not-found');
    }
  }
}