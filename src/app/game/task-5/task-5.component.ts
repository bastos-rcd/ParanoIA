import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-task-5',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-5.component.html',
  styleUrl: './task-5.component.css'
})

export class Task5Component {
  public numTask: number = 5;

  public isWin: boolean = false;

  public blue: boolean = false;
  public red: boolean = false;
  public orange: boolean = false;
  public green: boolean = false;

  public isPlaying: boolean = false;

  private order: string[] = [];
  public result: string[] = [
    environment.randomChoice(['blue', 'red', 'orange', 'green']),
    environment.randomChoice(['blue', 'red', 'orange', 'green']),
    environment.randomChoice(['blue', 'red', 'orange', 'green']),
    environment.randomChoice(['blue', 'red', 'orange', 'green'])
  ];

  constructor() { }

  ngOnInit() {
    this.showOrder();
  }

  private showOrder() {
    this.isPlaying = true;

    setTimeout(() => {
      this.playColor(this.result[0]);
    }, 1000);
    setTimeout(() => {
      this.hideColor();
    }, 2000);
    setTimeout(() => {
      this.playColor(this.result[1]);
    }, 3000);
    setTimeout(() => {
      this.hideColor();
    }, 4000);
    setTimeout(() => {
      this.playColor(this.result[2]);
    }, 5000);
    setTimeout(() => {
      this.hideColor();
    }, 6000);
    setTimeout(() => {
      this.playColor(this.result[3]);
    }, 7000);
    setTimeout(() => {
      this.hideColor();
      this.isPlaying = false;
    }, 8000);
  }

  private playColor(color: string) {
    if (color === 'blue') {
      this.blue = true;
    } else if (color === 'red') {
      this.red = true;
    } else if (color === 'orange') {
      this.orange = true;
    } else if (color === 'green') {
      this.green = true;
    }
  }

  private hideColor() {
    this.blue = false;
    this.red = false;
    this.orange = false;
    this.green = false;
  }

  public clickColor(color: string) {
    this.order.push(color);

    if (this.order.length === this.result.length) {
      if (JSON.stringify(this.order) === JSON.stringify(this.result)) {
        this.isWin = true;
      } else {
        this.order = [];
        this.showOrder();
      }
    }
  }
}