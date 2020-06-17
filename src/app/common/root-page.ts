import { AlertController, Platform } from '@ionic/angular';

import { Subscription } from 'rxjs';

export class RootPage {
    private backButtonSubscription: Subscription;

    constructor(private alertCtrl: AlertController, private platform: Platform) {}

    ionViewDidEnter() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => this.showExitAppConfirm());
    }

    ionViewWillLeave() {
        this.backButtonSubscription.unsubscribe();
    }

    private async showExitAppConfirm(): Promise<void> {
        const alert: HTMLIonAlertElement = await this.alertCtrl.create({
            header: 'Salir',
            message: '¿Quieres salir de la aplicación?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                },
                {
                    text: 'Salir',
                    // tslint:disable-next-line:no-string-literal
                    handler: () => navigator['app'].exitApp(),
                },
            ],
        });

        await alert.present();
        await alert.onDidDismiss();
    }
}
