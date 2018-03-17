import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CheckoutPage } from '../pages/checkout/checkout';
import { MenuPage } from '../pages/menu/menu';
import { QrScannerPage } from '../pages/qr-scanner/qr-scanner';
import { NfcPage } from '../pages/nfc/nfc';
import { HideHeaderDirective } from '../directives/hide-header/hide-header';
import { PopoverSearchPage } from '../pages/popover-search/popover-search';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CheckoutPage,
    MenuPage,
    QrScannerPage,
    NfcPage,
    HideHeaderDirective,
    PopoverSearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CheckoutPage,
    MenuPage,
    QrScannerPage,
    NfcPage,
    PopoverSearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
