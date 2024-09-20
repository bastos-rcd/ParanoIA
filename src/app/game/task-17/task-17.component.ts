import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-17',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-17.component.html',
  styleUrl: './task-17.component.css'
})

export class Task17Component {
  public numTask: number = 17;

  public isWin: boolean = false;

  public progress: number = 0;
  private interval: any;

  constructor() {
    this.interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      } else {
        this.progress = 100;
        this.isWin = true;
        clearInterval(this.interval);
      }
    }, 200);
  }
}