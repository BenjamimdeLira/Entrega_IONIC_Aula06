import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 
 *  Benjamim de Lira Siqueira Melo RA: 816112054
 *
 */

@IonicPage()
@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html',
})
export class LancamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LancamentoPage');
  }

}
