import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Wine } from '../recherche/recherche';

@Component({
  templateUrl: 'rechercheDetail.html'
})

export class RechercheDetail {

	item : Wine;

	constructor(public navCtrl: NavController, public param : NavParams, public alertCtrl: AlertController ) {
	   this.item = this.param.data.wine;

	   console.log(this.item);
	}

	goBack() {
    	this.navCtrl.pop();
    }

    showAlert() {
	    let alert = this.alertCtrl.create({
	      title: 'Encore du vin ?',
	      subTitle: 'Vas y mec c du bon ... et pas cher :) ',
	      buttons: ['OK']
	    });
	    alert.present();
  	}
}