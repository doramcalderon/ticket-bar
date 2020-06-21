import { Component } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public appPages;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private translate: TranslateService,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('es');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('es').subscribe(() => this.initializePages());
    }

    private initializePages(): void {
        const titles: string[] = this.translate.instant(['HOME.TITLE', 'CONFIG.TITLE']);
        this.appPages = [
            {
                title: titles['HOME.TITLE'],
                url: '/home',
                icon: 'home',
            },
            {
                title: titles['CONFIG.TITLE'],
                url: '/config',
                icon: 'settings',
            },
        ];
    }
}
