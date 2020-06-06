import { createAction, props } from '@ngrx/store';

import { Category, TicketType } from '../../../common/model/category.model';

export const loadCategories = createAction('[Categirues] Load Categories');
export const loadCategoriesSuccess = createAction('[Categories] Load Categories Success', props<{ categories: Category[] }>());
export const loadCategoriesFailure = createAction('[Categories] Load Categories Failure', props<{ error: any }>());

export const emptyCategories = createAction('[Categories] Empty Categories');

export const addUpdateCategory = createAction('[Categories] Add or Update Category', props<{ category: Category }>());
export const addUpdateCategorySuccess = createAction('[Categories] Add or Update Category Success', props<{ categories: Category[] }>());
export const addUpdateCategoryFailure = createAction('[Categories] Add or Update Category Failure', props<{ error: any }>());

export const deleteCategory = createAction('[Categories] Delete Category', props<{ id: string }>());
export const deleteCategorySuccess = createAction('[Categories] Delete Category Success', props<{ categories: Category[] }>());
export const deleteCategoryFailure = createAction('[Categories] Delete Category Failure', props<{ error: any }>());

export const openTicketConfig = createAction('[Categories] Open Ticket config', props<{ category: Category; ticket: TicketType }>());
export const openTicketConfigFailure = createAction('[Categories] Open Ticket config Failure', props<{ error: any }>());

export const addTicketToCategory = createAction(
    '[Categories] Add Ticket to Category',
    props<{ category: Category; newTicket: TicketType }>(),
);
export const addTicketToCategorySuccess = createAction('[Categories] Add Ticket to Category Success', props<{ categories: Category[] }>());
export const addTicketToCategoryFailure = createAction('[Categories] Add Ticket to Category Failure', props<{ error: any }>());

export const updateTicket = createAction(
    '[Categories] Update Ticket in Categories',
    props<{ newTicket: TicketType; oldTicket: TicketType }>(),
);
export const updateTicketSuccess = createAction('[Categories] Update Ticket in Categories Success', props<{ categories: Category[] }>());
export const updateTicketFailure = createAction('[Categories] Update Ticket in Categories Failure', props<{ error: any }>());
