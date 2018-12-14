import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';
import { Storage } from '@ionic/storage'
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
Carrito=CarritoPage;
usuarios;
carrito;

producto;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.producto=this.navParams.get('producto');
    this.carrito=this.navParams.get('carrito');
    this.usuarios=this.navParams.get('usuarios');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }
  clickAgregar()
  {
    this.carrito.push(this.producto);
    this.storage.set('usuarios', JSON.stringify(this.usuarios));
    this.navCtrl.pop();
  }

}
