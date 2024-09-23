import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crewmate',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './crewmate.component.html',
  styleUrl: './crewmate.component.css'
})

export class CrewmateComponent {
  @Input()
  public user: User = new User("", false, "", false);

  constructor() { }
}