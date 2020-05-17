import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { get } from 'lodash';

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

    constructor(private modalCtrl: ModalController, private categoriesStore: Store<Category>) {}

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

    public changeColor(color: string) {
        this.categoriesForm.patchValue({ color });
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
    }

    public async openTicketConfig(): Promise<void> {
        const cat: Category = !!this.category
            ? this.category
            : {
                  id: name,
                  name,
                  icon: this.categoriesForm.get('icon').value,
                  color: this.categoriesForm.get('color').value,
              };
        const modal = await this.modalCtrl.create({ component: TicketConfigComponent, componentProps: { category: cat } });
        await modal.present();
        const newTicket: TicketType = (await modal.onDidDismiss()).data;
        if (!!newTicket) {
            this.tickets = this.tickets.concat([newTicket]);
        }
    }
}
