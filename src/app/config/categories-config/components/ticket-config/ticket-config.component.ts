import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Base64 } from '@ionic-native/base64/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ModalController, Platform } from '@ionic/angular';

import { Ticket } from 'src/app/cart/store/cart.model';
import { Category, TicketType } from 'src/app/common/model/category.model';

@Component({
    selector: 'tb-ticket-config',
    templateUrl: 'ticket-config.component.html',
    styleUrls: ['ticket-config.component.scss'],
})
export class TicketConfigComponent implements OnInit {
    @Input()
    public category: Category;

    public ticketForm: FormGroup;
    public ticket: TicketType;
    public ticketPreview: Ticket;
    public b64Image: string;

    private isDesktop: boolean;

    constructor(
        private modalCtrl: ModalController,
        private base64: Base64,
        private fileChooser: FileChooser,
        private filePath: FilePath,
        private platform: Platform,
    ) {}

    ngOnInit() {
        this.ticketForm = new FormGroup({
            name: new FormControl('', Validators.required),
            price: new FormControl(undefined),
            image: new FormControl(undefined),
        });
        this.ticketPreview = {
            category: this.category,
            type: { name: '', price: undefined },
        };
        this.isDesktop = this.platform.is('desktop');
    }

    public dismiss(): void {
        this.modalCtrl.dismiss(this.ticket);
    }

    public async save(): Promise<void> {
        this.ticket = {
            name: this.ticketForm.get('name').value,
            price: this.ticketForm.get('price').value,
            image: this.ticketForm.get('image').value,
        };
        this.dismiss();
    }

    public async selectImage(): Promise<void> {
        if (!this.isDesktop) {
            try {
                const imgNativePath: string = await this.fileChooser.open({ mime: 'image/*' });
                const imgUri: string = await this.filePath.resolveNativePath(imgNativePath);
                this.b64Image = await this.base64.encodeFile(imgUri);
            } catch (error) {
                console.error('Error selecting an image', error);
            }
        } else {
            console.warn('You cannnot select an image in desktop mode');
        }
    }
}
