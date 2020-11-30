import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { HttpService } from '../http.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeList = [];
  public viewedrecipe = null;
  public apikey = "ae13605347msh066a4381043cae0p1f3af9jsnbc060d9950c7"
  constructor( public http: HttpClient, 
    private httpService: HttpService) { }

  grabRecipes(searchterm) {
    console.log('grabbing recipes');
    let url = "https://api.spoonacular.com/recipes/search?query=" + searchterm + "&apiKey=1c795e5caa8b4b33a73fc72e10f49af6&number=20"
    let response = this.http.get(url).pipe(tap(response => {
      console.log(response)
      this.recipeList = response['results']
    }));
     
    return response

    
  }

  getRecipe (id:number){
    return this.httpService.get("https://api.spoonacular.com/recipes/" + id + "/information?includeNutrition=false" + "&apiKey=1c795e5caa8b4b33a73fc72e10f49af6&")
  }
}


