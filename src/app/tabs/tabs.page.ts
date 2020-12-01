import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( ) {}

  logout() {
    firebase.auth().signOut();
  }
}
