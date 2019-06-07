import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


 let apiaiplugin
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      apiaiplugin["ApiAIPlugin"].init(
        {
            clientAccessToken: "7247b8068a5544f297f1928448d5fec2", // insert your client access key here
            lang: "pt-BR" // set lang tag from list of supported languages
        }, 
        function(result) { 
           alert(result)
         },
        function(error) { 
          alert(error)
        }
    );
    });
  }
}

