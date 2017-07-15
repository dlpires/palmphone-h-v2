import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColetorPage } from './coletor';

@NgModule({
  declarations: [
    ColetorPage,
  ],
  imports: [
    IonicPageModule.forChild(ColetorPage),
  ],
  exports: [
    ColetorPage
  ]
})
export class ColetorPageModule {}
