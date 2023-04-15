import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RecipeRoutingModule } from "./recipes-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MaterialExampleModule } from "src/material.module";



import { RecipeCardComponent } from "src/app/shared/recipe-card/recipe-card.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { DetailComponent } from "./detail/detail.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { RecipesComponent } from "./recipes.component";
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeCardComponent,
    RecipesListComponent,
    DetailComponent,
    AddRecipeComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    ToastModule,
    CKEditorModule,
    RecipeRoutingModule,
    HttpClientModule,
    MaterialExampleModule
  ],
  exports: [RecipeCardComponent]
})

export class RecipesModule {}
