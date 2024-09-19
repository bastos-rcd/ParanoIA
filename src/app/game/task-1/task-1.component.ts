import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-1',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UpdateComponent
  ],
  templateUrl: './task-1.component.html',
  styleUrl: './task-1.component.css'
})

export class Task1Component {
  @Input()
  public numTask: number = 0;

  public code: number = 0;
  public codeToFind: number = Math.floor(Math.random() * 10000);

  public isWin: boolean = false;

  constructor() { }

  public onOpen() {
    if (this.code === this.codeToFind) {
      this.isWin = true;
    } else {
      this.codeToFind = Math.floor(Math.random() * 10000);
    }
  }
}