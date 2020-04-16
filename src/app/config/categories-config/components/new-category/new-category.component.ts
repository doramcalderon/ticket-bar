import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

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
    public categoriesForm: FormGroup;
    // public image: string;
    public icon: string;

    constructor(private modalCtrl: ModalController, private storageService: StorageService) {}

    async ngOnInit() {
        this.categoriesForm = new FormGroup({
            name: new FormControl('', Validators.required),
            icon: new FormControl(''),
            color: new FormControl(''),
        });
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
        categories.push({
            id: name,
            name,
            icon: this.categoriesForm.get('icon').value,
            color: this.categoriesForm.get('color').value,
        });

        await this.storageService.setObject(Keys.Categories, categories);
        await this.modalCtrl.dismiss();
    }

    public async selectImage(): Promise<void> {
        const modal = await this.modalCtrl.create({ component: IconPickerComponent });
        await modal.present();
        this.icon = (await modal.onDidDismiss()).data.icon;
        this.categoriesForm.patchValue({ icon: this.icon });
    }
}
