import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

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
}