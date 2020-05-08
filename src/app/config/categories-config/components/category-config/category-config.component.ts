import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { get } from 'lodash';

import { Category, TicketType } from '../../../../common/model/category.model';
import { Keys } from '../../../../storage.model';
import { StorageService } from '../../../../storage.service';
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

    constructor(private modalCtrl: ModalController, private storageService: StorageService) {}

    async ngOnInit() {
        this.categoriesForm = new FormGroup({
            name: new FormControl(get(this.category, 'name', ''), Validators.required),
            icon: new FormControl(get(this.category, 'icon', '')),
            color: new FormControl(get(this.category, 'color', '')),
        });
        this.icon = get(this.category, 'icon');
    }

    public async dismiss(): Promise<void> {
        await this.modalCtrl.dismiss();
    }

    public changeColor(color: string) {
        this.categoriesForm.patchValue({ color });
    }

    public async save(): Promise<void> {
        const name: string = this.categoriesForm.get('name').value;
        let categories: Category[] = await this.storageService.getObject(Keys.Categories);

        if (!categories) {
            categories = [];
        }
        const newCategory: Category = {
            id: name,
            name,
            icon: this.categoriesForm.get('icon').value,
            color: this.categoriesForm.get('color').value,
            tickets: this.tickets,
        };
        if (!!this.category && categories.length > 0) {
            categories = this.update(this.category, newCategory, categories);
        } else {
            categories.push(newCategory);
        }

        await this.storageService.setObject(Keys.Categories, categories);
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
            if (!this.tickets) {
                this.tickets = [];
            }
            this.tickets.push(newTicket);
        }
    }
    private update(category, newCategory, categories): Category[] {
        // get the category if exists
        const catIndex: number = categories.findIndex((c) => c.id === category.id);

        if (catIndex >= 0) {
            categories.splice(catIndex, 1, newCategory);
        }

        return categories;
    }
}
