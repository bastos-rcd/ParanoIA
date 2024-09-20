import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-20',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-20.component.html',
  styleUrl: './task-20.component.css'
})

export class Task20Component {
  public numTask: number = 20;

  public isWin: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isWin = true;
    }, 10000);
  }
}