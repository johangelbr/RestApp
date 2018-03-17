import { Component } from '@angular/core';
import { MenuPage } from '../menu/menu';
import { CheckoutPage } from '../checkout/checkout';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = CheckoutPage;

  constructor() {

  }
}
