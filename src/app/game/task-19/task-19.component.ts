import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-19',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UpdateComponent
  ],
  templateUrl: './task-19.component.html',
  styleUrl: './task-19.component.css'
})

export class Task19Component {
  public numTask: number = 19;

  public nom: string = '';
  public prenom: string = '';
  public date: string = '';
  public sexe: string = '';

  constructor() { }

  public isWin(): boolean {
    if (this.nom != '' && this.prenom != '' && this.date != '' && this.sexe != '') {
      return true;
    }
    return false;
  }
}