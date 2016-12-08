import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Tab1 } from '../pages/tab1/tab1';
import { Tab2 } from '../pages/tab2/tab2';

@NgModule({
  declarations: [
    MyApp,
    Tab1,
    Tab2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tab1,
    Tab2
  ],
  providers: []
})

export class AppModule {}
