import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
resena='';
prenda=[];
compra=[];
ropa='';
carrito=CarritoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.prenda=this.navParams.get('prenda');
    this.resena=this.navParams.get('resena');
    this.compra=this.navParams.get('compra');
    this.ropa=this.navParams.get('ropa');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }
  clickAgregar()
  {
    this.navCtrl.push(this.carrito,{prenda:this.ropa,compra:this.compra});
  }

}
