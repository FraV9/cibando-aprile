import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  testo: string;

  ricette: Recipe[];
  page = 1;
  ricettePerPagina = 4;


  constructor(
    private recipeService: RecipeService,
    private router: Router,
    ) {}


  ngOnInit(): void {
    this.onGetRecipe();
  }

  onGetRecipe(): void {
    this.recipeService.cerca.subscribe((res: any) => {
      this.testo = res;
      this.recipeService.searchRecipes(this.testo).subscribe({
        next: (res) => {
          this.ricette = res;
        },
        error: (error) => {
          console.log(error);
        }
      })
    })
  }

  paginate(event) {
    event.page = event.page + 1;
    this.page = event.page;
   }


}
