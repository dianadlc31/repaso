import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage'


/**
 * Generated class for the RegisroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regisro',
  templateUrl: 'regisro.html',
})
export class RegisroPage {
  mail="";
  pass="";
  per=[{mail:"", pass:""}];
  
  home=HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public storage:Storage) {
    this.per = this.navParams.get('per');

  }
  clickAgregar()
  {
    if(this.mail.length> 0)
    {
      
      this.per.push(
      {
        mail: this.mail, 
        pass: this.pass
      })

      this.navCtrl.pop();
      this.storage.set('per', JSON.stringify(this.per));
     
    }
    else if (this.mail.length<=0)
    {
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Tienes que llenar todos los espacios',
        buttons:['Ok']
      });
      alert.present();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisroPage');
  }

}
