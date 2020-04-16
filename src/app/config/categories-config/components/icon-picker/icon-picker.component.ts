import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'tb-icon-picker',
    templateUrl: './icon-picker.component.html',
    styleUrls: ['./icon-picker.component.scss'],
})
export class IconPickerComponent implements OnInit {
    public icons: string[] = ['basket', 'beer', 'cafe', 'ice-cream', 'pizza', 'pint', 'pie', 'restaurant', 'wine'];

    constructor(private modalCtrl: ModalController) {}

    ngOnInit() {}

    public cancel(): void {
        this.dismiss();
    }
    public select(icon: string): void {
        this.dismiss(icon);
    }
    public async dismiss(icon?: string): Promise<void> {
        await this.modalCtrl.dismiss({ icon });
    }
}
