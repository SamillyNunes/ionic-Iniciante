import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any; //= IntroPage; //Define qual a primeira página que vai rodar!!!

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // Vai pegar o localstorage que tá armazenado e armazenar na var config
      let config = configProvider.getConfigData(); 
      // Se config for igual a nulo, significa que é a 1ª vez que o user entrou, então mostrará o slider
      if(config==null){
        this.rootPage=IntroPage;
        configProvider.setConfigData(false); // Vai setar o slider no configProvider p false, fazendo com que não abra novamente outra vez
      } else{ // Se for diferente de nulo,  então ele já entrou no app, logo não é necessário mostrar o slider novamente
        this.rootPage=TabsPage;
      }


      console.log(config)

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
