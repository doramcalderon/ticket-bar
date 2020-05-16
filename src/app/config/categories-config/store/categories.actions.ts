import { createAction, props } from '@ngrx/store';

import { Category } from '../../../common/model/category.model';

export const loadCategories = createAction('[Categirues] Load Categories');
export const loadCategoriesSuccess = createAction('[Categories] Load Categories Success', props<{ categories: Category[] }>());
export const loadCategoriesFailure = createAction('[Categories] Load Categories Failure', props<{ error: any }>());

export const emptyCategories = createAction('[Categories] Empty Categories');

export const addUpdateCategory = createAction('[Categories] Add or Update Category', props<{ category: Category }>());
export const addUpdateCategorySuccess = createAction('[Categories] Add or Update Category Success', props<{ categories: Category[] }>());
export const addUpdateCategoryFailure = createAction('[Categories] Add or Update Category Failure', props<{ error: any }>());

export const deleteCategory = createAction('[Categories] Delete Category', props<{ id: string }>());
