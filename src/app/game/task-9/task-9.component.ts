import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-9',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-9.component.html',
  styleUrl: './task-9.component.css'
})

export class Task9Component {
  public numTask: number = 9;

  public value: number = 0;

  constructor() { }

  public onChangeValue(event: Event): void {
    this.value = (event.target as HTMLInputElement).valueAsNumber;
  }
}