import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { get } from 'lodash';

import { Category } from '../../../../common/model/category.model';
import { Keys } from '../../../../storage.model';
import { StorageService } from '../../../../storage.service';
import { IconPickerComponent } from '../icon-picker/icon-picker.component';

@Component({
    selector: 'tb-new-category',
    templateUrl: 'new-category.component.html',
    styleUrls: ['new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
    @Input()
    public category: Category;
    public categoriesForm: FormGroup;
    public icon: string;

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

    private update(category, newCategory, categories): Category[] {
        // get the category if exists
        const catIndex: number = categories.findIndex((c) => c.id === category.id);

        if (catIndex >= 0) {
            categories.splice(catIndex, 1, newCategory);
        }

        return categories;
    }
}
