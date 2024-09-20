import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-task-8',
  standalone: true,
  imports: [
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-8.component.html',
  styleUrl: './task-8.component.css'
})

export class Task8Component {
  @Input()
  public numTask: number = 0;

  public isWin: boolean = false;

  public images: string[] = [
    "fa-solid fa-car-side fa-2xl",
    "fa-solid fa-carrot fa-2xl",
    "fa-solid fa-poo fa-2xl",
    "fa-solid fa-key fa-2xl",
    "fa-solid fa-tree fa-2xl",
    "fa-regular fa-snowflake fa-2xl",
    "fa-solid fa-glasses fa-2xl",
    "fa-solid fa-pizza-slice fa-2xl"
  ];
  public image: string = environment.randomChoice(this.images);

  constructor() { }

  public onClickWord(index: number) {
    if (this.images[index] === this.image) {
      this.isWin = true;
    }
  }
}