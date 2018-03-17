import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopoverSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-search',
  templateUrl: 'popover-search.html',
})
export class PopoverSearchPage {
  TopMenu:string;
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
   this.TopMenu = (this.navParams.data.choice);
  }


  close(event) {
      this.viewCtrl.dismiss({choice: event});
      this.TopMenu = event;
  }


}
