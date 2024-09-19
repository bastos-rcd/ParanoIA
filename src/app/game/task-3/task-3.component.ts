import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-3',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-3.component.html',
  styleUrl: './task-3.component.css'
})
export class Task3Component {
  @Input()
  public numTask: number = 0;

  public isWin: boolean = false;

  public orange: number = 50;
  public green: number = 50;
  public red: number = 50;

  public readonly orangeResult: number = Math.floor(Math.random() * 100);
  public readonly greenResult: number = Math.floor(Math.random() * 100);
  public readonly redResult: number = Math.floor(Math.random() * 100);

  constructor() { }

  public onChangeOrange(event: Event): void {
    this.orange = (event.target as HTMLInputElement).valueAsNumber;
  }

  onChangeGreen(event: Event): void {
    this.green = (event.target as HTMLInputElement).valueAsNumber;
  }

  onChangeRed(event: Event): void {
    this.red = (event.target as HTMLInputElement).valueAsNumber;
  }
}