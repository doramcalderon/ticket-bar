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
    public async addUpdateCategory(category: Category): Promise<Category[]> {
        if (!category) {
            return Promise.reject(`No category to add`);
        }

        // get current categories
        let categories: Category[] = await this.storageService.getObject(Keys.Categories);
        if (!categories) {
            categories = [];
        }

        // check if the category to add already exists
        const categoryFound: Category = await this.findCategory(category.id);
        if (!!categoryFound) {
            return this.update(categoryFound, category, categories);
        } else {
            // add the new category
            categories.push(category);
            const categoryAdded: boolean = await this.storageService.setObject(Keys.Categories, categories);
            return categoryAdded ? categories : Promise.reject(`Error adding category to storage`);
        }
    }

    public update(category, newCategory, categories): Category[] {
        // get the category if exists
        const catIndex: number = categories.findIndex((c) => c.id === category.id);

        if (catIndex >= 0) {
            categories.splice(catIndex, 1, newCategory);
        }

        return categories;
    }

    public async removeCategory(id: string): Promise<Category[]> {
        const categories: Category[] = await this.storageService.getObject(Keys.Categories);
        const catIndex: number = categories.findIndex((c) => c.id === id);
        categories.splice(catIndex, 1);
        const deleted: boolean = await this.storageService.setObject(Keys.Categories, categories);
        return deleted ? categories : Promise.reject(`Error deleting the category with id ${id}`);
    }

    private async findCategory(id: string): Promise<Category> {
        // get current categories
        let categories: Category[] = await this.storageService.getObject(Keys.Categories);
        if (!categories) {
            categories = [];
        }

        // check if the category to add already exists
        return categories.find((c) => c.id === id);
    }
}
