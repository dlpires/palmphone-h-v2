import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ColetorManualPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coletor-manual',
  templateUrl: 'coletor-manual.html',
})
export class ColetorManualPage {

  options: BarcodeScannerOptions;
  results: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColetorManualPage');
  }

  async scanBarcode(){
    this.results = await this.barcode.scan();
    console.log(this.results);
  }

}
