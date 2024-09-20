import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-11',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-11.component.html',
  styleUrl: './task-11.component.css'
})
export class Task11Component {
  public numTask: number = 11;

  public isWin: boolean = false;

  public cases: boolean[] = [
    false, false, false,
    false, false, false,
    false, false, false
  ];

  public motif: boolean[] = [
    false, true, false,
    true, true, true,
    false, true, false
  ];

  constructor() { }

  public onClick(index: number): void {
    this.cases[index] = !this.cases[index];

    if (this.cases.join('') === this.motif.join('')) {
      this.isWin = true;
    }
  }
}