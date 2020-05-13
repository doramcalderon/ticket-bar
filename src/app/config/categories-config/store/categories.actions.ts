import { createAction, props } from '@ngrx/store';

import { Category } from '../../../common/model/category.model';

export const loadCategories = createAction('[Categirues] Load Categories');
export const loadCategoriesSuccess = createAction('[Categories] Load Categories Success', props<{ categories: Category[] }>());
export const loadCategoriesFailure = createAction('[Categories] Load Categories Failure', props<{ error: any }>());

export const emptyCategories = createAction('[Categories] Empty Categories');

export const addCategory = createAction('[Categories] Add Category', props<{ category: Category }>());
export const addCategorySuccess = createAction('[Categories] Add Category Success', props<{ categories: Category[] }>());
export const addCategoryFailure = createAction('[Categories] Add Category Failure', props<{ error: any }>());

export const deleteCategory = createAction('[Categories] Delete Category', props<{ id: string }>());
