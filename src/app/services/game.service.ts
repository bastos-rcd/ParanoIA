import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  constructor(
    private db: AngularFireDatabase
  ) { }

  public getGame(): Observable<any> {
    return this.db.object("game").valueChanges();
  }

  public updateGame() {
    const game = this.db.object("game");

    game.query.ref.transaction(data => {
      if (data) {
        data.done = (data.done || 0) + 1;
      }
      return data;
    });
  }
}