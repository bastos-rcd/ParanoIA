import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private db: AngularFireDatabase
  ) { }

  public getUser(name: string): Observable<any> {
    return this.db.object("users/" + name).valueChanges();
  }

  public getUsers(): Observable<any[]> {
    return this.db.list("users").valueChanges();
  }

  public setUsers(users: User[]): void {
    this.db.object("users").remove().then(() => {
      users.forEach(user => {
        this.db.object("users/" + user.getName()).set(user);
      });
    });
  }

  public setEliminated(name: string): void {
    this.db.object("users/" + name + "/eliminated").set(true);
  }

  public removeTask(name: string, task: number) {
    const user = this.db.object("users/" + name + "/tasks");

    user.query.ref.transaction(data => {
      if (data) {
        const tasks = (data as string).split('-').map(Number);
        const temp = tasks.filter(t => t !== task);
        const newTasks = temp.join('-');
        user.set(newTasks);
      }
    });
  }
}