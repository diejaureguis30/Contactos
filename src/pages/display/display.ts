import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  nombre='';
  telefono='';
  correo='';
  facebook='';
  instagram='';
  twitter='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre=this.navParams.get('nombre');
    this.telefono=this.navParams.get('telefono');
    this.correo=this.navParams.get('correo');
    this.facebook=this.navParams.get('facebook');
    this.instagram=this.navParams.get('instagram');
    this.twitter=this.navParams.get('twitter');
    console.log(this.navParams.get(this.nombre));
    console.log(this.navParams.get(this.telefono));
    console.log(this.navParams.get(this.correo));
    console.log(this.navParams.get(this.facebook));
    console.log(this.navParams.get(this.instagram));
    console.log(this.navParams.get(this.twitter));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

}
