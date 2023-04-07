import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CustomValidator } from '../../user/customValidator';
import { Recipe } from 'src/app/models/recipe.model';

import { PrimeNGConfig } from 'primeng/api';
import { RecipeService } from 'src/app/services/recipe.service';

import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {

  ricettaInserita: any;

  constructor(private config: PrimeNGConfig,
    private recipeService: RecipeService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  form = new FormGroup ({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required),
    published: new FormControl(false),
  })

  onSubmit() {
    // console.log(this.form.value);

    const recipe = this.form.value;

    this.recipeService.insertRecipe(recipe).pipe(take(1)).subscribe({
      next: (res) => {
        console.log(res);
        this.ricettaInserita = res;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  openModal(content: any) {

    this.modalService.open(content, { ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) => {
      console.log('azione da eseguire')
    }).catch((res) => {
      console.log('nessuna azione da eseguire')
    });
  }

  onClose() {
    this.ricettaInserita = '';
    this.router.navigate(['ricette/']);
  }

  onNewRecipe() {
    this.ricettaInserita = '';
    this.form.patchValue({
    title: '',
    description: '',
    image: '',
    difficulty: '',
    published: false,
    })
  }

}
