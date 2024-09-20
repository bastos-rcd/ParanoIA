import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-10',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-10.component.html',
  styleUrl: './task-10.component.css'
})

export class Task10Component {
  @Input()
  public numTask: number = 0;

  public isWin: boolean = false;

  public cibles: boolean[] = [true, true, true, true, true, true, true, true];

  constructor() { }

  public onShootCible(index: number): void {
    this.cibles[index] = false;

    if (this.cibles.every(cible => !cible)) {
      this.isWin = true;
    }
  }
}