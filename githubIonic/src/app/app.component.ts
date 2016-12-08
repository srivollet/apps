import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { Tab1 } from '../pages/tab1';
import { Tab2 } from '../pages/tab2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  tab1: any;
  tab2: any;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.tab1 = Tab1;
    this.tab2 = Tab2;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      //this.nav.setRoot(tab1);
    });
  }
}
