import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tab1.html'
})
export class Tab1 {

	constructor(public navCtrl: NavController) {
    // Id is 1, nav refers to Tab1
    //console.log(this.nav.id)
  }
}