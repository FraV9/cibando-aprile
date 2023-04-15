import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/logged-in.guard';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'profilo', component: ProfileComponent, canActivate: [LoggedInGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {}
