import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { DisplayPage } from '../display/display';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
cont=ContactoPage;
disp=DisplayPage;
contacto='';
Contactos =[
  {nombre: 'Diego', telefono:'33228426', correo:'jauregui.muestra@gmail.com', facebook:'Diego Jauregui', instagram:'jaure1034', twitter:'@mrk42'}
];

  


  constructor(public navCtrl: NavController) {

  }
  verContacto(c){
    this.navCtrl.push(this.disp,c);
  }
  clickAgregar(){
    this.navCtrl.push(this.cont,{contactos:this.Contactos} );
  }
  
}
