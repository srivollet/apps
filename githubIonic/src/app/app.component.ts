import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { Recherche } from '../pages/recherche/recherche';
import { Cave } from '../pages/cave/cave';

@Component({
  templateUrl: 'app.html' 
})
export class MyApp {
  recherche: any;
  cave: any;

  constructor(public platform: Platform) {
    //this.initializeApp();

    this.recherche = Recherche;
    this.cave = Cave;
  }

  /*initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

    });
  }*/
}
