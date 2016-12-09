import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RechercheDetail } from '../rechercheDetail/rechercheDetail';

@Component({
  templateUrl: 'recherche.html'
})

export class Recherche {
  
	searchQuery: string = '';

  items: any[];
  rootPage = this;

	constructor(public navCtrl: NavController) {
	   this.initializeItems();
  }

   initializeItems() {
     /*this.items = ['test1', 'test2'];*/
    this.items = [
      new Wine('Chateau neuf du pape', 'danger', 'chateau_neuf_pape.jpg'), 
      new Wine('Domaine des quatres filles', 'danger', 'quatre_fille.png'), 
      new Wine('Pomerol', 'danger', 'pomerol.png'), 
      new Wine('Chablis domaine de la meulière', 'white', 'chablis.png')
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goToOtherPage(wine : Wine) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(RechercheDetail, { wine: wine });
  }
}

export class Wine {
  name: string;
  type: string;
  photo: string;

  constructor(name: string, type: string, photo : string) {
    this.name = name;
    this.type = type;
    this.photo = photo;
  }
}