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
  resena='';
prenda=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.compra=this.navParams.get('r');
    this.prenda=this.navParams.get('prenda');
    this.resena=this.navParams.get('resena');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

}
