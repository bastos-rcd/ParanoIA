import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-7',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-7.component.html',
  styleUrl: './task-7.component.css'
})

export class Task7Component {
  public numTask: number = 7;

  public isWin: boolean = false;

  public circle1: boolean = false;
  public circle2: boolean = false;

  constructor() { }

  public onClickCircle1(): void {
    this.circle1 = true;
  }

  public onClickCircle2(): void {
    this.circle2 = true;
    this.isWin = true;
  }
}