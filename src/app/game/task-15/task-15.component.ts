import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-15',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-15.component.html',
  styleUrl: './task-15.component.css'
})

export class Task15Component {
  @Input()
  public numTask: number = 0;

  public isWin: boolean = false;

  public order: number[] = [];
  public readonly solution: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public status: string[] = ["bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400"];

  constructor() { }

  public onClick(num: number): void {
    this.order.push(num);

    for (let i = 0; i < this.order.length; i++) {
      if (this.order[i] === this.solution[i]) {
        this.status[num - 1] = 'bg-green-400';
      } else {
        this.order = [];
        this.status = ["bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400", "bg-neutral-400"];
      }
    }

    if (this.order.length === 10 && this.order.toString() === this.solution.toString()) {
      this.isWin = true;
    }
  }
}