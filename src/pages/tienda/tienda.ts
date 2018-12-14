import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the TiendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tienda',
  templateUrl: 'tienda.html',
})
export class TiendaPage {
producto= ProductoPage;
Carrito=CarritoPage;
compra=[];

usuarios=[];
carrito=[];

ropa=
  [
    
    {color: "#9ed0e6" ,producto: "Pantalón paper bag", precio: "$ 449", vendedor: "H&M",valoracion: [1,2,3,4,5],imagen: "../assets/1.jpg", fecha: "16 Noviembre 2017",  disp: "21", usuario:"Cristina Carrasco", fechar: "3 Enero 2018",  comentario:" La blusa está muy bonita, pero la tela no me gustó tanto."},
    {color: "#9ed0e6" ,producto: "Blusa con rayas", precio: "$ 300", vendedor: "Forever 21",valoracion: [1,2,3,4,5],imagen: "../assets/2.jpg", fecha: "22 Octubre 2018",disp:"5", usuario:"Jessica Hernández", fechar: "23 Julio 2018", comentario:"Lo compré en cuánto lo vi. Este top es simplemente hermoso y llegó rápido." }, 
    {color: "#9ed0e6" ,producto: "Blusa Naranja de Manga Larga", precio: "$ 329", vendedor: "H&M",valoracion: [1,2,3,4,5],imagen: "../assets/3.jpg", fecha:"8 de Septiembre 2018", disp: "6",  usuario:"Yenisleidys Sotuyo" , fechar: "4 Diciembre 2018", comentario:" Muy buen producto, con muy buena calidad. 100% Recomendable."},
    {color: "#9ed0e6" ,producto: "Jersey de cuello alto de punto", precio: "$ 229", vendedor: "H&M",valoracion: [1,2,3,4],imagen: "../assets/4.jpg", fecha: "8 Diciembre 2018",disp:"34", usuario:"Stephanie Carreiro", fechar: "8 Diciembre 2018", comentario:"  Adoro este suéter, ¡está súper lindo! El único pero es que me queda un poco chico." },
    {color: "#9ed0e6" ,producto: "Vestido con escote de pico", precio: "$ 229", vendedor: "H&M",valoracion: [1,2,3,4,5],imagen: "../assets/5.jpg", fecha: "1 Junio 2018",disp:"19", usuario:"Alejandra Cruz Calderón", fechar: "8 Diciembre 2018", comentario:"Sencilo pero bonito, tardo bastante en llegar ero es cómodo y se ve genial." }, 
    {color: "#9ed0e6" ,producto: "Camisa de maga corta", precio: "$ 249", vendedor: "Pull&Bear",valoracion: [1,2,3,4,5],imagen: "../assets/6.jpg", fecha: "16 Marzo 2017",disp:"8", usuario:"Diana González", fechar: "17 Marzo 2017", comentario:"El precio estaba fantástico y el material es muy bueno, es igual al de la foto, excelente producto." }, 
    {color: "#9ed0e6" ,producto: "Pantalones negros plisados", precio: "$ 599", vendedor: "Pull&Bear",valoracion: [1,2,3,4],imagen: "../assets/7.jpg", fecha: "1 Junio 2018",disp:"19", usuario:"Mimsey Tove", fechar: "5 Noviembre 2018", comentario:"Me quedó como esperaba y adoro el color. Solamente que referiría que fuera mas largo." }, 
    {color: "#9ed0e6" ,producto: "Sudadera Suave con Cuello Alto", precio: "$ 349", vendedor: "Pull&Bear",valoracion: [1,2,3,4,5],imagen: "../assets/8.jpg", fecha: "15 Agosto 2018",disp:"43", usuario:"Boonie King", fechar: "12 Diciembre 2018", comentario:"Es de buen material, buen color y realmente adoro el cuello. 100% Recomendable." }, 
    {color: "#9ed0e6" ,producto: "Suéter Amarillo con Cuello Alto", precio: "$ 349", vendedor: "Pull&Bear",valoracion: [1,2,3,4,5],imagen: "../assets/9.jpg", fecha: "5 Abril 2018",disp:"20", usuario:"Karla Navarrete", fechar: "2 Abril 2017", comentario:" La tela es gruesa y se le pega un poco la pelisa, pero estan cómodos, al estilo y se ajustan bien" }, 
    {color: "#9ed0e6" ,producto: "Falda de camuflaje con 5 bolsillos", precio: "$ 499", vendedor: "Pull&Bear",valoracion: [1,2,3,4],imagen: "../assets/10.jpg", fecha: "4 Octubre 2018",disp:"2", usuario:"Alejandra Cruz Calderón",  fechar: "8 Diciembre 2018", comentario:"Está fantástica. Definitivamente la usaré seguido" }, 
    {color: "#9ed0e6" ,producto: "Pantalón de Mezclilla", precio: "$ 959", vendedor: "U.S. POLO ASSN",valoracion: [1,2,3,4,5],imagen: "../assets/11.jpg", fecha: "9 Febrero 2018",disp:"35", usuario:"Ana Geish",  fechar: "27 Marzo 2018", comentario:"El color y figura de los pantalones son hermosos, ¡Me alegro de haber comprado este producto!" }, 
    {color: "#9ed0e6" ,producto: "Sudadera", precio: "$ 1189", vendedor: "U.S. POLO ASSN",valoracion: [1,2,3,4],imagen: "../assets/12.jpeg", fecha: "3 Enero 2018",disp:"3", usuario:"Montserrat Díaz",  fechar: "14 Febrero 2018", comentario:" Me encantó. La tela viene super padre. No se hace fea al lavar la máquina, la recomiendo ampliamente." }, 
    {color: "#9ed0e6" ,producto: "Mono", precio: "$ 1299", vendedor: "U.S. POLO ASSN",valoracion: [1,2,3,4,5],imagen: "../assets/13.jpg", fecha: "30 Julio 2017",disp:"12", usuario:"Judith Newhall", fechar: "31 Julio 2018", comentario:"Simplemente adoro este mono, la tela y estilo están perfectos. El envío fue rápido y el producto lo vale. Lo recomiendo sin duda." }, 
    {color: "#9ed0e6" ,producto: "Chaqueta Negra de Mujer", precio: "$ 699", vendedor: "U.S. POLO ASSN",valoracion: [1,2,3,4,5],imagen: "../assets/14.jpeg", fecha: "12 Septiembre 2016",disp:"12", usuario:"Luisa Rentería",  fechar: "15 Octubre 2018", comentario:"¡La calidad y tela son bastante buenas! Aunque está muy justa de la talla así que hay que comprar una talla más grande." }, 
    {color: "#9ed0e6" ,producto: "Camiseta Polo Azul", precio: "$ 259", vendedor: "U.S. POLO ASSN",valoracion: [1,2,3,4],imagen: "../assets/15.jpg", fecha: "21 Septiembre 2018",disp:"17", usuario:"Amy H.", fechar: "25 Diciembre 2018", comentario:"Adoro esta camisa. Tengo varia de ellas. Buena calidad, pero algo ajustadas. Hay que pedir una talla más y quedan perfectas." }, 
    {color: "#9ed0e6" ,producto: "Top de Hombros descubiertos de crepé plisado", precio: "$ 370", vendedor: "Forever 21",valoracion: [1,2,3,4,5],imagen: "../assets/16.jpg", fecha: "22 Octubre 2018",disp:"5", usuario:"Jessica Hernández", fechar: "23 Julio 2018", comentario:"Lo compré en cuánto lo vi. Este top es simplemente hermoso y llegó rápido." }, 
    {color: "#9ed0e6" ,producto: "Pantalones de tobillo con línea lateral", precio: "$ 512", vendedor: "Forever 21",valoracion: [1,2,3,4],imagen: "../assets/17.jpg", fecha: "24 Octubre 2018",disp:"21", usuario:"Lili Paredes", fechar: "18 Diciembre 2018", comentario:"Eran tan bonitos, realmente los adoraba. Pero me quedaron demasiado apretados y no puedo usarlos " }, 
    {color: "#9ed0e6" ,producto: "Blusa Satín", precio: "$ 499", vendedor: "Forever 21",valoracion: [1,2,3,4,5],imagen: "../assets/18.jpg", fecha: "4 Octubre 2018",disp:"12", usuario:"Sofi Vargas", fechar: "8 Diciembre 2018", comentario:"Está fantástica. Definitivamente la usaré seguido" }, 
    {color: "#9ed0e6" ,producto: "Falda Skater negra", precio: "$ 299", vendedor: "Forever 21",valoracion: [1,2,3,4,5],imagen: "../assets/19.jpg", fecha: "9 Octubre 2018",disp:"9", usuario:"Victoria Ríos", fechar: "16 Junio 2018", comentario:"Está fantástica. Definitivamente la usaré seguido" }, 
    {color: "#9ed0e6" ,producto: "Crop top", precio: "$ 199", vendedor: "Forever 21",valoracion: [1,2,3,4,5],imagen: "../assets/20.jpg", fecha: "3 Octubre 2018",disp:"99", usuario:"Fer Ramos", fechar: "6 Junio 2018", comentario:"Está fantástica. Definitivamente la usaré seguido" }, 
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carrito=this.navParams.get("car");
    this.usuarios=this.navParams.get("usuarios");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiendaPage');
  }

  clickProducto(r)
  {
    this.navCtrl.push(this.producto,{producto:r,carrito:this.carrito, usuarios:this.usuarios});
  }
  clickCarrito()
  {
    this.navCtrl.push(this.Carrito, {carrito: this.carrito});
  }
}
