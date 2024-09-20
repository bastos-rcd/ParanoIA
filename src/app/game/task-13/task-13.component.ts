import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-13',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-13.component.html',
  styleUrl: './task-13.component.css'
})

export class Task13Component {
  public numTask: number = 13;

  public isWin: boolean = false;

  public order: number[] = [];
  private readonly orderToFind: number[] = [3, 1, 4, 5, 2];
  public status: string[] = ['bg-red-400', 'bg-red-400', 'bg-red-400', 'bg-red-400', 'bg-red-400'];

  constructor() { }

  public onClick(num: number): void {
    this.order.push(num);

    for (let i = 0; i < this.order.length; i++) {
      if (this.order[i] == this.orderToFind[i]) {
        this.status[num - 1] = 'bg-green-400';
      }
      else {
        this.order = [];
        this.status = ['bg-red-400', 'bg-red-400', 'bg-red-400', 'bg-red-400', 'bg-red-400'];
      }
    }

    if (this.order.length == 5 && this.order.join('') == this.orderToFind.join('')) {
      this.isWin = true;
    }
  }
}