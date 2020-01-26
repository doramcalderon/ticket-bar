import { Injectable } from '@angular/core';
import { Category, TicketType } from '../model/category.model';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    constructor() {}

    public loadCategories(): Category[] {
        const foodTickets: TicketType[] = [
            { name: 'Hamburguesa', price: 3.5 },
            { name: 'Pinchito', price: 3.5 },
            { name: 'Campero', price: 3.5 },
            { name: 'Patatas', price: 2 },
        ];
        const drinkTickets: TicketType[] = [
            { name: 'Combinado', price: 4 },
            { name: 'Refresco', price: 2.5 },
            { name: 'Agua', price: 1 },
        ];
        return [
            { name: 'Bebida', icon: 'beer', color: 'food', tickets: drinkTickets },
            { name: 'Comida', icon: 'pizza', color: 'drink', tickets: foodTickets },
            { name: 'Otros', icon: '', color: 'warning' },
        ];
    }
}
