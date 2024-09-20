import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-16',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-16.component.html',
  styleUrl: './task-16.component.css'
})

export class Task16Component {
  public numTask: number = 16;

  public isWin: boolean = false;

  public progress: number = 0;
  private interval: any;

  constructor() { }

  public onStartFilling() {
    if (this.progress >= 100) return;

    this.interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      } else {
        this.progress = 100;
        this.isWin = true;
        clearInterval(this.interval);
      }
    }, 50);
  }
}