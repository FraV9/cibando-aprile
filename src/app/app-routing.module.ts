import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';

import { DetailComponent } from './components/recipes/detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},    // va sempre messo in apertura
  {path: 'home', component: HomeComponent},
  {path: 'ricette', component: RecipesComponent},
  {path: 'dettaglio/:_id', component: DetailComponent},
  {path: '**', redirectTo: 'home'}                      // va sempre messo in chiusura
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

