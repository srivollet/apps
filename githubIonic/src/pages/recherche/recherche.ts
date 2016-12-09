import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RechercheDetail } from '../rechercheDetail/rechercheDetail';

@Component({
  templateUrl: 'recherche.html'
})

export class Recherche {
  
	searchQuery: string = '';

  items: Wine[];
  rootPage = this;

	constructor(public navCtrl: NavController) {
	   this.initializeItems();
  }

   initializeItems() {
     /*this.items = ['test1', 'test2'];*/
    this.items = [
      new Wine(1, 'Chateau neuf du pape', 'danger', '', 'chateau_neuf_pape.jpg'), 
      new Wine(2, 'Domaine des quatres filles', 'danger', '', 'quatre_fille.png'), 
      new Wine(3, 'Pomerol', 'danger', `Le pomerol est un vin rouge français d'appellation d'origine contrôlée produit sur la commune de Pomerol et une partie de celles de Libourne et de Lalande-de-Pomerol. Il s'agit d'une appellation du vignoble du Libournais, une des subdivisions du vignoble de Bordeaux. Cette appellation est réputée notamment pour ses crus les plus fameux, Pétrus, Le Pin, Lafleur, La Conseillante, Gazin, Maillet, Rouget et bien d'autres. Elle produit exclusivement du vin rouge et, si presque tous les cépages bordelais peuvent y être utilisés (cabernet-sauvignon, cabernet franc, côt, etc.), c'est le merlot qui prédomine nettement, représentant même 100 % de l'encépagement chez certains crus, comme Le Pin.`, 'pomerol.png'), 
      new Wine(4, 'Chablis domaine de la meulière', 'white', '', 'chablis.png')
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
  id: number;
  name: string;
  type: string;
  photo: string;
  description: string;

  constructor(id:number, name: string, type: string, description: string, photo : string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.photo = photo;
  }
}