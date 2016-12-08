import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { Tab1 } from '../pages/tab1/tab1';
import { Tab2 } from '../pages/tab2/tab2';

@Component({
  templateUrl: 'app.html' 
})
export class MyApp {
  tab1: any;
  tab2: any;

  constructor(public platform: Platform) {
    //this.initializeApp();

    this.tab1 = Tab1;
    this.tab2 = Tab2;
  }

  /*initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

    });
  }*/
}
