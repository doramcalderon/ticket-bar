import { Injectable } from '@angular/core';

import { Keys } from '../../storage.model';
import { StorageService } from '../../storage.service';
import { Category, TicketType } from '../model/category.model';
import { Ticket } from 'src/app/cart/store/cart.model';

@Injectable({
    providedIn: 'root',
})
export class CategoriesService {
    constructor(private storageService: StorageService) {}

    public async getAllCategories(): Promise<Category[]> {
        return await this.storageService.getObject(Keys.Categories);
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
            categories = this.update(categoryFound, category, categories);
        } else {
            // add the new category
            categories.push(category);
        }
        const categoryAdded: boolean = await this.storageService.setObject(Keys.Categories, categories);
        return categoryAdded ? categories : Promise.reject(`Error adding category to storage`);
    }

    public update(category, newCategory, categories): Category[] {
        // get the category if exists
        const catIndex: number = categories.findIndex((c) => c.id === category.id);

        if (catIndex >= 0) {
            categories.splice(catIndex, 1, newCategory);
        }

        return categories;
    }

    public async addTicketToCategory(category: Category, newTicket: TicketType): Promise<Category[]> {
        // get current categories
        const categories: Category[] = await this.storageService.getObject(Keys.Categories);
        if (!!categories) {
            const catIndex: number = categories.findIndex((c) => c.id === category.id);

            if (catIndex >= 0) {
                const categoryTickets: TicketType[] = categories[catIndex].tickets || [];
                categoryTickets.push(newTicket);
                categories[catIndex].tickets = categoryTickets;
            }

            const added: boolean = await this.storageService.setObject(Keys.Categories, categories);
            if (!added) {
                return Promise.reject('The ticket has not been added correctly');
            }
        }

        return categories;
    }

    public async updateTicketInCategories(newTicket: TicketType, oldTicket: TicketType): Promise<Category[]> {
        // get current categories
        let categories: Category[] = await this.storageService.getObject(Keys.Categories);
        if (!!categories) {
            categories = categories.map((category) => this.updateTicket(category, newTicket, oldTicket));

            const updated: boolean = await this.storageService.setObject(Keys.Categories, categories);
            if (!updated) {
                return Promise.reject('The categories have not been updated correctly');
            }
        }
        return categories;
    }

    /**
     * Update a ticket in a category if exists. If it does not exist, it does nothing.
     * @param category Category to update.
     * @param newTicket Ticket with changes.
     * @param oldTicket Old ticket.
     */
    private updateTicket(category: Category, newTicket: TicketType, oldTicket?: TicketType): Category {
        const updatedTickets: TicketType[] = Object.assign([], category.tickets);

        if (!!category.tickets) {
            const ticketIndex = category.tickets.findIndex((t) => t.name === oldTicket.name);
            if (ticketIndex >= 0) {
                updatedTickets[ticketIndex] = newTicket;
            }
        }

        return {
            ...category,
            tickets: updatedTickets,
        };
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
