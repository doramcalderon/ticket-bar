import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Base64 } from '@ionic-native/base64/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ModalController, Platform, AlertController, IonInput } from '@ionic/angular';

import { get } from 'lodash';

import { Ticket } from 'src/app/cart/store/cart.model';
import { Category, TicketType } from 'src/app/common/model/category.model';

@Component({
    selector: 'tb-ticket-config',
    templateUrl: 'ticket-config.component.html',
    styleUrls: ['ticket-config.component.scss'],
})
export class TicketConfigComponent implements OnInit, AfterViewInit {
    @Input()
    public category: Category;
    @Input()
    public ticket: TicketType;
    @ViewChild('ticketName', { static: true })
    private nameInputRef: IonInput;

    public ticketForm: FormGroup;
    public ticketPreview: Ticket;
    public b64Image: string;

    private isDesktop: boolean;

    constructor(
        private alertCtrl: AlertController,
        private modalCtrl: ModalController,
        private base64: Base64,
        private fileChooser: FileChooser,
        private filePath: FilePath,
        private platform: Platform,
    ) {}

    ngOnInit() {
        this.ticketForm = new FormGroup({
            name: new FormControl(get(this.ticket, 'name', ''), Validators.required),
            price: new FormControl(get(this.ticket, 'price')),
            image: new FormControl(get(this.ticket, 'image')),
        });
        this.ticketPreview = {
            category: this.category,
            type: { name: '', price: undefined },
        };
        this.isDesktop = this.platform.is('desktop');
    }

    ngAfterViewInit() {
        // ion-input autofocus property and IonInput.setFocus() method don't work
        // Workoaround proposed in https://github.com/ionic-team/ionic/issues/18132
        setTimeout(() => this.nameInputRef.setFocus(), 100);
    }

    public async dismiss(newTicket?: TicketType, oldTicket?: TicketType): Promise<void> {
        const result = !newTicket && !oldTicket ? undefined : { newTicket, oldTicket };
        this.modalCtrl.dismiss(result);
    }

    public async close(): Promise<void> {
        if (this.ticketForm.dirty) {
            const alert = await this.alertCtrl.create({
                header: 'Descartar cambios',
                message: '¿Deseas descartar los cambios?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Descartar',
                        handler: () => this.dismiss(),
                    },
                ],
            });
            await alert.present();
        } else {
            this.dismiss();
        }
    }

    public async save(): Promise<void> {
        const newTicket = {
            name: this.ticketForm.get('name').value,
            price: this.ticketForm.get('price').value,
            image: this.ticketForm.get('image').value,
        };
        this.dismiss(newTicket, this.ticket);
    }

    public async selectImage(): Promise<void> {
        if (!this.isDesktop) {
            try {
                const imgNativePath: string = await this.fileChooser.open({ mime: 'image/*' });
                const imgUri: string = await this.filePath.resolveNativePath(imgNativePath);
                this.b64Image = await this.base64.encodeFile(imgUri);
                this.ticketForm.get('image').markAsDirty();
            } catch (error) {
                console.error('Error selecting an image', error);
            }
        } else {
            console.warn('You cannnot select an image in desktop mode');
        }
    }
}
