import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { ColetorPage } from '../coletor/coletor';
import { PerfilPage } from '../perfil/perfil';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private toast: ToastController) {

  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
    if(data && data.email && data.uid){
      this.toast.create({
        message: `Bem vindo ao APP_NAME, ${data.email}`,
        duration: 3000
      }).present();
    }else{
      this.toast.create({
        message: `Falha ao logar, ${data.email}`,
        duration: 3000
      }).present();
    }
    });
  }

  abrirTelaColeta(){
    this.navCtrl.push(ColetorPage);
  }

  abrirTelaPerfil(){
    this.navCtrl.push(PerfilPage);
  }
}
