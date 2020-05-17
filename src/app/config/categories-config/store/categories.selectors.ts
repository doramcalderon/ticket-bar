import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCategories from './categories.reducer';
import { Category, TicketType } from 'src/app/common/model/category.model';

export const selectCategoriesState = createFeatureSelector<fromCategories.CategoriesState>(fromCategories.categoriesFeatureKey);
export const selectCategories = createSelector(selectCategoriesState, (state: fromCategories.CategoriesState) => state.categories);
export const selectCategoriesCount = createSelector(selectCategories, (categories: Category[]) => (!!categories ? categories.length : 0));
export const selectCategory = createSelector(selectCategories, (categories: Category[], cat: Category) =>
    !!categories ? categories.find((c) => c.id === cat.name) : undefined,
);

export const selectTickets = createSelector(selectCategories, (categories: Category[]) =>
    categories.reduce((acc: TicketType[], category) => (!!category.tickets ? acc.concat(category.tickets) : acc), []),
);
export const selectTicketsCount = createSelector(selectTickets, (tickets: TicketType[]) => (!!tickets ? tickets.length : 0));
