import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { environment } from '../../../environments/environment';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-4',
  standalone: true,
  imports: [
    DragDropModule,
    CommonModule,
    UpdateComponent
  ],
  templateUrl: './task-4.component.html',
  styleUrl: './task-4.component.css'
})

export class Task4Component {
  @Input()
  public numTask: number = 0;

  public isWin: boolean = false;

  private colors = ['bg-blue-400', 'bg-white', 'bg-red-400'];

  public squares: string[] = [
    environment.randomChoice(this.colors),
    environment.randomChoice(this.colors),
    environment.randomChoice(this.colors),
    environment.randomChoice(this.colors),
    environment.randomChoice(this.colors),
    environment.randomChoice(this.colors)
  ];

  public blueZone: string[] = [];
  public whiteZone: string[] = [];
  public redZone: string[] = [];

  constructor() { }

  drop(event: CdkDragDrop<string[]>, colorType?: 'bg-blue-400' | 'bg-white' | 'bg-red-400') {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const square = event.previousContainer.data[event.previousIndex];
      if (square === colorType) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }

    if (this.squares.length === 0) {
      this.isWin = true;
    }
  }
}