import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserGameComponent } from './user/user-game/user-game.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: UserGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }