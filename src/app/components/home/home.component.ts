import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ricette: Recipe[];

  name: string;
  email: string;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService) {}

  ngOnInit(): void {
    this.prendiRicette();

    this.prendiDatiUtente();
  }

  prendiDatiUtente() {
    this.userService.datiUtente.subscribe((res: any) => {
      // localStorage.setItem('name', res.name);
      // localStorage.setItem('email', res.email);
      this.name = res.name;
      this.email = res.email;
    });

    // if(localStorage.getItem('name')) {
    //   this.name = localStorage.getItem('name');
    //   this.email = localStorage.getItem('email');
    // }
  }

  closeModal() {
    // localStorage.removeItem('name');
    // localStorage.removeItem('email');
    this.name = '';
    this.email = '';
  }

  prendiRicette() {
    this.recipeService.getRecipes().subscribe({
      next: (response) => {
        this.ricette = response;
        this.ricette = this.ricette.sort((a, b) => b._id - a._id).slice(0, 4);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
