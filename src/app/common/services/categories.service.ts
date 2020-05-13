import { Injectable } from '@angular/core';

import { Keys } from '../../storage.model';
import { StorageService } from '../../storage.service';
import { Category, TicketType } from '../model/category.model';

@Injectable({
    providedIn: 'root',
})
export class CategoriesService {
    private readonly foodTickets: TicketType[] = [
        { name: 'Hamburguesa', price: 3.5 },
        { name: 'Pinchito', price: 3.5 },
        { name: 'Campero', price: 3.5 },
        { name: 'Patatas', price: 2 },
    ];
    private readonly drinkTickets: TicketType[] = [
        { name: 'Combinado', price: 4 },
        { name: 'Refresco', price: 2.5 },
        { name: 'Agua', price: 1 },
    ];
    private readonly categories: Category[] = [
        { id: '1', name: 'Bebida', icon: 'pint', color: 'food', tickets: this.drinkTickets },
        { id: '2', name: 'Comida', icon: 'restaurant', color: 'drink', tickets: this.foodTickets },
        { id: '3', name: 'Otros', icon: 'wine', color: 'warning' },
    ];

    constructor(private storageService: StorageService) {}

    public async getAllCategories(): Promise<Category[]> {
        return await this.storageService.getObject(Keys.Categories);
    }

    public getCategory(id: string): Category {
        return this.categories.find((c) => c.id === id);
    }

    /**
     * Add a category to storage.
     * If the category already exists or is null or undefined, an error is returned.
     * @param category Category.
     */
    public async addCategory(category: Category): Promise<Category[]> {
        if (!category) {
            return Promise.reject(`No category to add`);
        }

        // get current categories
        let categories: Category[] = await this.storageService.getObject(Keys.Categories);
        if (!categories) {
            categories = [];
        }

        // check if the category to add already exists
        const categoryFound: Category = categories.find((c) => c.name === category.name);
        if (!!categoryFound) {
            return Promise.reject(`The category ${categoryFound.name} already exists`);
        }

        // add the new category
        categories.push(category);
        const categoryAdded: boolean = await this.storageService.setObject(Keys.Categories, categories);
        return categoryAdded ? categories : Promise.reject(`Error adding category to storage`);
    }

    public async removeCategory(id: string): Promise<void> {
        const categories: Category[] = await this.storageService.getObject(Keys.Categories);
        const catIndex: number = categories.findIndex((c) => c.id === id);
        categories.splice(catIndex, 1);
        await this.storageService.setObject(Keys.Categories, categories);
    }
}
