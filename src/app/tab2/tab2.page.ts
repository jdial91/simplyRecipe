import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { FavoritesService } from '../services/favorites.service';
import { ModalController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  favorites: any;

  constructor( private screenOrientation: ScreenOrientation,
               private favoritesservice: FavoritesService,
               public modalController: ModalController) {}

  ionViewWillEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    setTimeout(() => {
      this.favorites =  this.favoritesservice.favorites;
      console.log(this.favorites);
    }, 500)
  }
  async loadFavorite(id: any) {
    console.log()
    const modal = await this.modalController.create({
    component: ViewPage, 
    componentProps: {id: id}});
    return await modal.present();
  
  }
}
