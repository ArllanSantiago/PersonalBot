import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  messages: any[] = [];
  constructor(public navCtrl: NavController) {
    this.messages.push({
      text: "Olá, Como posso lhe ajudar?"
      ,sender:"PrecaBot" 
    })
    this.messages.push({
      text: "Oi"
      ,sender:"me" 
    })
  }

}
