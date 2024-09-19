import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-2',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-2.component.html',
  styleUrl: './task-2.component.css'
})
export class Task2Component {
  @Input()
  public numTask: number = 0;

  public isWin: boolean = false;

  constructor() { }

  onTurnOn() {
    this.isWin = true;
  }
}
