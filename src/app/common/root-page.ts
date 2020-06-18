import { AlertController, Platform } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export class RootPage {
    private backButtonSubscription: Subscription;

    constructor(private alertCtrl: AlertController, private platform: Platform, private translate: TranslateService) {}

    ionViewDidEnter() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => this.showExitAppConfirm());
    }

    ionViewWillLeave() {
        this.backButtonSubscription.unsubscribe();
    }

    private async showExitAppConfirm(): Promise<void> {
        const translations: string[] = this.translate.instant(['APP.EXIT', 'APP.EXIT_APP_CONFIRM', 'COMMON.CANCEL']);
        const alert: HTMLIonAlertElement = await this.alertCtrl.create({
            header: this.translate.instant(translations['APP.EXIT']),
            message: this.translate.instant(translations['APP.EXIT_APP_CONFIRM']),
            buttons: [
                {
                    text: translations['COMMON.CANCEL'],
                    role: 'cancel',
                },
                {
                    text: translations['APP.EXIT'],
                    // tslint:disable-next-line:no-string-literal
                    handler: () => navigator['app'].exitApp(),
                },
            ],
        });

        await alert.present();
        await alert.onDidDismiss();
    }
}
