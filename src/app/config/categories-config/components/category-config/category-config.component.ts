import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { get, slice } from 'lodash';

import { Category, TicketType } from '../../../../common/model/category.model';
import * as CategoriesActions from '../../store/categories.actions';
import { IconPickerComponent } from '../icon-picker/icon-picker.component';
import { TicketConfigComponent } from '../ticket-config/ticket-config.component';

@Component({
    selector: 'tb-category-config',
    templateUrl: 'category-config.component.html',
    styleUrls: ['category-config.component.scss'],
})
export class CategoryConfigComponent implements OnInit {
    @Input()
    public category: Category;
    public categoriesForm: FormGroup;
    public icon: string;
    public tickets: TicketType[];

    constructor(private alertCtrl: AlertController, private modalCtrl: ModalController, private categoriesStore: Store<Category>) {}

    async ngOnInit() {
        this.categoriesForm = new FormGroup({
            name: new FormControl(get(this.category, 'name', ''), Validators.required),
            icon: new FormControl(get(this.category, 'icon', '')),
            color: new FormControl(get(this.category, 'color', '')),
        });
        this.icon = get(this.category, 'icon');
        this.tickets = get(this.category, 'tickets', []);
    }

    public async dismiss(): Promise<void> {
        await this.modalCtrl.dismiss();
    }

    public async close(): Promise<void> {
        if (this.categoriesForm.dirty) {
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

    public changeColor(color: string) {
        this.categoriesForm.patchValue({ color });
        this.categoriesForm.get('color').markAsDirty();
    }

    public async save(): Promise<void> {
        const name: string = this.categoriesForm.get('name').value;
        const newCategory: Category = {
            id: name,
            name,
            icon: this.categoriesForm.get('icon').value,
            color: this.categoriesForm.get('color').value,
            tickets: this.tickets,
        };
        this.categoriesStore.dispatch(CategoriesActions.addUpdateCategory({ category: newCategory }));
        await this.modalCtrl.dismiss();
    }

    public async selectImage(): Promise<void> {
        const modal = await this.modalCtrl.create({ component: IconPickerComponent });
        await modal.present();
        this.icon = (await modal.onDidDismiss()).data.icon;
        this.categoriesForm.patchValue({ icon: this.icon });
        this.categoriesForm.get('icon').markAsDirty();
    }

    public async openTicketConfig(ticket?: TicketType): Promise<void> {
        const cat: Category = !!this.category
            ? this.category
            : {
                  id: name,
                  name,
                  icon: this.categoriesForm.get('icon').value,
                  color: this.categoriesForm.get('color').value,
              };
        const modal = await this.modalCtrl.create({ component: TicketConfigComponent, componentProps: { category: cat, ticket } });
        await modal.present();
        const result = (await modal.onDidDismiss()).data;
        const { newTicket, oldTicket } = result;

        if (!!newTicket) {
            if (!!oldTicket) {
                const ticketIndex = this.tickets.findIndex((t) => t.name === oldTicket.name);
                const ticketsCopy = Object.assign([], this.tickets);
                ticketsCopy[ticketIndex] = newTicket;
                this.tickets = ticketsCopy;
            } else {
                this.tickets = this.tickets.concat([newTicket]);
            }
            this.categoriesForm.markAsDirty();
        }
    }
}
