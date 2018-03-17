import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ViewChild } from '@angular/core';
import { QrScannerPage } from '../pages/qr-scanner/qr-scanner';
import { NfcPage } from '../pages/nfc/nfc';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pages = [
        { title: 'Home', component: TabsPage },
        { title: 'QRScanner', component: QrScannerPage },
        { title: 'NFC', component: NfcPage },

      ];
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title == 'Home'){
      this.nav.setRoot(page.component);
    }else{
      this.nav.push(page.component);
    }
    
  }
}
