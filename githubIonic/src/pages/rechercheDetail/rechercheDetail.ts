import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wine } from '../recherche/recherche';

@Component({
  templateUrl: 'rechercheDetail.html'
})

export class RechercheDetail {

	item : Wine;

	constructor(public navCtrl: NavController, public param : NavParams) {
	   this.item = this.param.data.wine;

	   console.log(this.item);
	}

	goBack() {
    	this.navCtrl.pop();
    }
}