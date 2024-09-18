import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserGameComponent } from './user/user-game/user-game.component';
import { TaskComponent } from './game/task/task.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: UserGameComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }