import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  newFavorite = {user: '', id: 0, title: ''};
  public favorites = [];
  ref = firebase.database().ref('favorites/')

  constructor() {
    this.ref.on('value', resp => {
      this.favorites = [];
      this.favorites = snapshotToArray(resp);
      console.log(this.favorites);
    });
   }

  addfavorite(recipe: any){
   this.newFavorite.user = firebase.auth().currentUser.email;
   this.newFavorite.id = recipe.id;
   this.newFavorite.title = recipe.title;
   console.log(recipe);
  return firebase.database().ref('favorites/').push(this.newFavorite);
  }  
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
};