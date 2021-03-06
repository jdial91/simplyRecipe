import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ModalController, NavParams } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { HttpService } from '../http.service';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  id: any;
  recipe: any;
  constructor(public viewCtrl: ModalController,
     private recipeService: RecipeService,
     private screenOrientation: ScreenOrientation,
     private http: HttpService,
     public navParams: NavParams,
     private favoritesService: FavoritesService) { }

  ngOnInit(){
    this.id = this.navParams.get("id");
    this.recipeService.getRecipe(this.id)
      .subscribe(s => {
        console.log(s)
        this.recipe = s
        console.log(this.recipe)
      })

  }

  ionViewWillEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }


  dismiss() {
    this.viewCtrl.dismiss();
    }

  addtofavfunc(recipe: any) {
    console.log(recipe)
      this.favoritesService.addfavorite(recipe)
  }
}
