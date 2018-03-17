import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { PopoverSearchPage } from '../popover-search/popover-search';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  TopMenu: string;
  constructor(private menu: MenuController, private popoverCtrl: PopoverController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.menu.swipeEnable(false);
    this.TopMenu = "Menú";
  }

  popoverShow(event){
    let popover = this.popoverCtrl.create(PopoverSearchPage,{choice: this.TopMenu});

    popover.present({
      ev: event
    });
    popover.onDidDismiss(data => {
      if(data != null){
        this.TopMenu = data.choice;
      }
    });
    
  }

}
