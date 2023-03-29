import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  percorsoStelline = "../../../../assets/images/difficolta-"

  ricetta: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ){}

  ngOnInit(): void {
    this.onGetRecipe();
  }

  onGetRecipe(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));      //metodo snapshot paramMap

    this.recipeService.getRecipe(id).subscribe({
      next: (res) => {
        this.ricetta = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onGetRecipe2(): void {
    this.activatedRoute.params.subscribe((parametriUrl) => {                  //metodo param

      const id = Number(parametriUrl['_id']);

      this.recipeService.getRecipe(id).subscribe({
        next: (res) => {
          this.ricetta = res;
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
  }

}
