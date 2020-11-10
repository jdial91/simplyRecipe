import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private recipeService: RecipeService ) {}
  
  ionViewWillEnter() {
    let searchterm = "crawfish"
    this.recipeService.grabRecipes(searchterm).subscribe();
    }
}
