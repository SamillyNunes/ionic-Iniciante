import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Charles França do código" //Se identificar o tipo, estará restringindo apenas a ele. 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public soma(num1:number, num2:number): void {
    alert(num1+num2); // Manda um pop-up para o user "alertando" sobre algo
  }

  ionViewDidLoad() { //Parte do ciclo de vida de uma página. Neste caso, mostra-rá quando carregar a pag
    //this.soma(10,99); // Usa o 'this' pra referenciar a própria classe
  }

}


