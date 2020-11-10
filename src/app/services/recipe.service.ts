import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeList = [];
  public apikey = "ae13605347msh066a4381043cae0p1f3af9jsnbc060d9950c7"
  constructor( public http: HttpClient) { }

  grabRecipes() {
    console.log('grabbing recipes');
    let url = "https://api.spoonacular.com/recipes/search?query=crawfish&apiKey=1c795e5caa8b4b33a73fc72e10f49af6&number=20"
    /**  let url = "https://api.spoonacular.com/recipes/search?apiKey=" + this.apikey + "&number=20" */
    let response = this.http.get(url).pipe(tap(response => {
      console.log(response)
      this.recipeList = response['results']
    }));
     
    return response

    
  }
}


