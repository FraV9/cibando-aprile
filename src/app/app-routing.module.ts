import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';

import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { AddRecipeComponent } from './components/recipes/add-recipe/add-recipe.component';
import { EsempioCombineComponent } from './components/esempio-combine/esempio-combine.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},    // va sempre messo in apertura
  {path: 'home', component: HomeComponent},
  {path: 'ricette', component: RecipesComponent, children: [
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path: '', pathMatch: 'full', component: RecipesListComponent},
    {path: 'addRecipe', pathMatch: 'full', component: AddRecipeComponent}
  ]},
  {path: 'combine', component: EsempioCombineComponent},
  {path: 'sign-up', component: SignUpComponent},

  {path: '**', redirectTo: 'home'}                      // va sempre messo in chiusura
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

