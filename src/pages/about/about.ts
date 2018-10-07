import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public varSoma;

  constructor(public navCtrl: NavController) {

  }

  public soma(n1:number,n2:number){
    this.varSoma=n1+n2
    alert(n1+n2)
  }

}
