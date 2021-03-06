import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ViewPage} from '../view/view.page';
import { ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private recipeService: RecipeService,
               public modalController: ModalController, 
               private screenOrientation: ScreenOrientation,
               private userService: UserService,
               private router: Router ) {}
  
  searchValue: number = 0;
    
  showLogin() {
    this.router.navigateByUrl('/login');

  }

  ionViewWillEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    let searchterm = ""
    this.recipeService.grabRecipes(searchterm).subscribe();
    }

  recipeSearch(key: any) {
    let searchterm = key.target.value
    this.recipeService.grabRecipes(searchterm).subscribe();
    }
  
  async viewRecipe(id:any) {
    console.log(id)
    const modal = await this.modalController.create({
    component: ViewPage, 
    componentProps: {id: id}});
    return await modal.present();
  }
}