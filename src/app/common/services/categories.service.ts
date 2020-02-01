import { Injectable } from '@angular/core';
import { TicketType, Category } from '../model/category.model';

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
        { id: '1', name: 'Bebida', icon: 'beer', color: 'food', tickets: this.drinkTickets },
        { id: '2', name: 'Comida', icon: 'pizza', color: 'drink', tickets: this.foodTickets },
        { id: '3', name: 'Otros', icon: 'wine', color: 'warning' },
    ];

    constructor() {}

    public getAllCategories(): Category[] {
        return this.categories;
    }

    public getCategory(id: string): Category {
        return this.categories.find(c => c.id === id);
    }
}
