import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private db: AngularFireDatabase
  ) { }

  public getUsers(): Observable<any[]> {
    return this.db.list("users").valueChanges();
  }
}