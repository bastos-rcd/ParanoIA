import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-6',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UpdateComponent
  ],
  templateUrl: './task-6.component.html',
  styleUrl: './task-6.component.css'
})

export class Task6Component {
  @Input()
  public numTask: number = 0;

  public isWin: boolean = false;

  public code: string = "";
  public readonly codeToFind: string = this.generateRandomString(10);

  constructor() { }

  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public onCheckCode(): void {
    if (this.code === this.codeToFind) {
      this.isWin = true;
    }
  }
}