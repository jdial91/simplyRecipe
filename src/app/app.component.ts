import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyBX-fw0fD1wQhvX72W2VHsoragTMGjGXlU",
      authDomain: "simplerecipe-f8648.firebaseapp.com",
      databaseURL: "https://simplerecipe-f8648.firebaseio.com",
      projectId: "simplerecipe-f8648",
      storageBucket: "simplerecipe-f8648.appspot.com",
      messagingSenderId: "877361027320",
      appId: "1:877361027320:web:d42cfdceaf0df43a32030d"
    })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}