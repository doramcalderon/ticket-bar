import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonInput, ModalController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { get } from 'lodash';
import { Observable, Subscription } from 'rxjs';

import { Category, TicketType } from '../../../../common/model/category.model';
import * as CategoriesActions from '../../store/categories.actions';
import * as CategoriesSelectors from '../../store/categories.selectors';
import { IconPickerComponent } from '../icon-picker/icon-picker.component';

@Component({
    selector: 'tb-category-config',
    templateUrl: 'category-config.component.html',
    styleUrls: ['category-config.component.scss'],
})
export class CategoryConfigComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input()
    public category: Category;
    public color: string;
    public categoriesForm: FormGroup;
    public icon: string;
    public tickets: TicketType[];
    public categories$: Observable<Category[]>;

    @ViewChild('categoryName', { static: true })
    private nameInputRef: IonInput;
    private ticketsSubscription: Subscription;

    constructor(
        private alertCtrl: AlertController,
        private modalCtrl: ModalController,
        private translate: TranslateService,
        private categoriesStore: Store<Category>,
    ) {}

    async ngOnInit() {
        this.categoriesForm = new FormGroup({
            name: new FormControl(get(this.category, 'name', ''), Validators.required),
            icon: new FormControl(get(this.category, 'icon', '')),
            color: new FormControl(get(this.category, 'color', '')),
        });
        this.color = get(this.category, 'color', 'black');
        this.icon = get(this.category, 'icon');
        this.initTickets();
    }

    ngAfterViewInit() {
        setTimeout(() => this.nameInputRef.setFocus(), 100);
    }

    ngOnDestroy(): void {
        if (!!this.ticketsSubscription) {
            this.ticketsSubscription.unsubscribe();
        }
    }

    public async dismiss(): Promise<void> {
        await this.modalCtrl.dismiss();
    }

    public async close(): Promise<void> {
        const translations = this.translate.instant(['COMMON.DISCARD.TITLE', 'COMMON.DISCARD.CONFIRM', 'COMMON.CANCEL', 'COMMON.DISCARD']);
        if (this.categoriesForm.dirty) {
            const alert = await this.alertCtrl.create({
                header: translations['COMMON.DISCARD.TITLE'],
                message: translations['COMMON.DISCARD.CONFIRM'],
                buttons: [
                    {
                        text: translations['COMMON.CANCEL'],
                        role: 'cancel',
                    },
                    {
                        text: translations['COMMON.DISCARD'],
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

    public async saveAndDismiss(): Promise<void> {
        await this.save();
        await this.modalCtrl.dismiss();
    }

    public async selectImage(): Promise<void> {
        const modal = await this.modalCtrl.create({ component: IconPickerComponent });
        await modal.present();
        this.icon = (await modal.onDidDismiss()).data.icon;
        this.categoriesForm.patchValue({ icon: this.icon });
        this.categoriesForm.get('icon').markAsDirty();
    }

    public async showSaveBeforeAlert(): Promise<void> {
        const translations = this.translate.instant(['COMMON.SAVE.TITLE', 'CATEGORY_CONFIG.SAVE_BEFORE', 'COMMON.CANCEL', 'COMMON.SAVE']);
        if (!this.category && this.categoriesForm.dirty) {
            const alert: HTMLIonAlertElement = await this.alertCtrl.create({
                header: translations['COMMON.SAVE.TITLE'],
                message: translations['CATEGORY_CONFIG.SAVE_BEFORE'],
                buttons: [
                    {
                        text: translations['COMMON.CANCEL'],
                        role: 'cancel',
                    },
                    {
                        text: translations['COMMON.SAVE'],
                        handler: () => this.saveAndOpenTicketConfig(),
                    },
                ],
            });

            await alert.present();
            await alert.onDidDismiss();
        } else {
            this.openTicketConfig();
        }
    }

    public async showRemoveTicketConfirm(ticket: TicketType): Promise<void> {
        const translations = this.translate.instant([
            'CATEGORY_CONFIG.REMOVE_TICKET.TITLE',
            'CATEGORY_CONFIG.REMOVE_TICKET.MESSAGE',
            'COMMON.CANCEL',
            'COMMON.REMOVE',
        ]);
        const alert: HTMLIonAlertElement = await this.alertCtrl.create({
            header: translations['CATEGORY_CONFIG.REMOVE_TICKET.TITLE'],
            message: translations['CATEGORY_CONFIG.REMOVE_TICKET.MESSAGE'],
            buttons: [
                {
                    text: translations['COMMON.CANCEL'],
                    role: 'cancel',
                },
                {
                    text: translations['COMMON.REMOVE'],
                    handler: () => this.removeTicket(ticket),
                },
            ],
        });

        await alert.present();
        await alert.onDidDismiss();
    }

    public openTicketConfig(ticket?: TicketType): void {
        this.categoriesStore.dispatch(CategoriesActions.openTicketConfig({ category: this.category, ticket }));
    }

    public removeTicket(ticket: TicketType): void {
        this.categoriesStore.dispatch(CategoriesActions.removeTicketFromCategory({ category: this.category, ticket }));
    }

    private initTickets(): void {
        if (!!this.category && !this.categories$) {
            this.categories$ = this.categoriesStore.select(CategoriesSelectors.selectCategories);
            this.ticketsSubscription = this.categories$.subscribe((categories) => {
                const cat = !!categories ? categories.find((c) => c.id === this.category.id) : undefined;
                this.tickets = !!cat ? cat.tickets : [];
            });
        }
    }

    private async save(): Promise<void> {
        if (this.categoriesForm.dirty) {
            const name: string = this.categoriesForm.get('name').value;
            const newCategory: Category = {
                id: name,
                name,
                icon: this.categoriesForm.get('icon').value,
                color: this.categoriesForm.get('color').value,
                tickets: this.tickets,
            };
            this.categoriesStore.dispatch(CategoriesActions.addUpdateCategory({ category: newCategory }));
            this.category = newCategory;
            this.initTickets();
            this.categoriesForm.markAsPristine();
        }
    }

    private async saveAndOpenTicketConfig(): Promise<void> {
        await this.save();
        await this.openTicketConfig();
    }
}
