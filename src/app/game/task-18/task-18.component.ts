import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-18',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-18.component.html',
  styleUrl: './task-18.component.css'
})

export class Task18Component {
  public numTask: number = 18;

  public isWin: boolean = false;

  public temp: number = Math.floor(Math.random() * 100);;
  private result: number = Math.floor(Math.random() * 100);

  public color: string = '';

  public status: string = '';

  constructor() {
    this.checkWin();
  }

  private checkWin(): void {
    if (this.temp === this.result) {
      this.color = 'text-green-400';
      this.status = 'Parfait';
      this.isWin = true;
    } else if (this.temp > this.result) {
      this.color = 'text-red-400';
      this.status = 'Trop chaud';
      this.isWin = false;
    } else {
      this.color = 'text-blue-400';
      this.status = 'Trop froid';
      this.isWin = false;
    }
  }

  public onClickUp(): void {
    this.temp++;
    this.checkWin();
  }

  public onClickDown(): void {
    this.temp--;
    this.checkWin();
  }
}