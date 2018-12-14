import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {
  Compra='';
  compra=[];

carro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.carro=this.navParams.get('carrito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

}
