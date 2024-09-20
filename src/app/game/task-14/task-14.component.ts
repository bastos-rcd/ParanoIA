import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-14',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-14.component.html',
  styleUrl: './task-14.component.css'
})

export class Task14Component {
  public numTask: number = 14;

  public isWin: boolean = false;

  constructor() { }

  public onAnswer(answer: string): void {
    if (answer === 'Antarctique') {
      this.isWin = true;
    }
  }
}