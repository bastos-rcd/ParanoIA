import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-12',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-12.component.html',
  styleUrl: './task-12.component.css'
})

export class Task12Component {
  @Input()
  public numTask: number = 0;

  public isWin: boolean = false;

  public firstNumber: number = Math.floor(Math.random() * 10) + 1;
  public secondNumber: number = Math.floor(Math.random() * 10) + 1;

  public value: number = 0;
  private result: number = this.firstNumber * this.secondNumber;

  constructor() { }

  public onKeyUp(event: any): void {
    this.value = event.target.value;

    if (this.value == this.result) {
      this.isWin = true;
    }
  }
}