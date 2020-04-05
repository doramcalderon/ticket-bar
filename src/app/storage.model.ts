import { Category } from './common/model/category.model';

export enum Keys {
    Printer = 'Printer',
    Categories = 'Categories',
}

export interface CategoriesConfig {
    [id: string]: Category;
}
