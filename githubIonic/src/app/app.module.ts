import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Recherche } from '../pages/recherche/recherche';
import { Cave } from '../pages/cave/cave';
import { RechercheDetail} from '../pages/rechercheDetail/rechercheDetail';

@NgModule({
  declarations: [
    MyApp,
    Recherche,
    Cave,
    RechercheDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Recherche,
    Cave,
    RechercheDetail
  ],
  providers: []
})

export class AppModule {}
