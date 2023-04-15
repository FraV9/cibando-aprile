import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';

import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AddRecipeComponent } from './components/recipes/add-recipe/add-recipe.component';

import { EsempioCombineComponent } from './components/esempio-combine/esempio-combine.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},    // va sempre messo in apertura
  {path: 'home', component: HomeComponent},
  {path: 'combine', component: EsempioCombineComponent},
  // {path: 'sign-up', component: SignUpComponent},
  // {path: 'profilo', component: ProfileComponent, canActivate: [LoggedInGuard]},
  // {path: 'login', component: LoginComponent},
  {path: 'user', loadChildren: () => import("./components/user/user.module").then(modulo => modulo.UserModule)},
  {path: 'ricette', loadChildren: () => import("./components/recipes/recipes.module").then(modulo => modulo.RecipesModule)},
  {path: '**', redirectTo: 'home'}                      // va sempre messo in chiusura
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

