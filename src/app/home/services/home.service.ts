import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    constructor() {}

    public loadCategories(): Category[] {
        return [
            { name: 'Bebida', icon: 'beer', color: 'food' },
            { name: 'Comida', icon: 'pizza', color: 'drink' },
            { name: 'Otros', icon: '', color: 'warning' },
        ];
    }
}
