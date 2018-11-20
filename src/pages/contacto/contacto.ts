import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DisplayPage } from '../display/display';
import { HomePage } from '../home/home';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  Nombre='';
  Telefono='';
  Correo='';
  Facebook='';
  Instagram='';
  Twitter='';
  contacto='';
  contactos=[];
  home=HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos=this.navParams.get("contactos");
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }
  clickAdd(){
    if (this.Nombre.length>0 && this.Telefono.length>0){
      this.contactos.push({nombre: this.Nombre, telefono:this.Telefono, correo:this.Correo, facebook: this.Facebook, instagram: this.Instagram, twitter: this.Twitter});
      this.navCtrl.pop();
    }
    else{
      const alert =this.alertCtrl.create({
        title: "Ooops!",
        subTitle: "El contacto está vacío",
        buttons: ['Ok']
      })
      alert.present();
  }
  
 
}
}
