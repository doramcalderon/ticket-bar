import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCategories from './categories.reducer';
import { Category } from 'src/app/common/model/category.model';

export const selectCategoriesState = createFeatureSelector<fromCategories.CategoriesState>(fromCategories.categoriesFeatureKey);
export const selectCategories = createSelector(selectCategoriesState, (state: fromCategories.CategoriesState) => state.categories);
export const selectCategoriesCount = createSelector(selectCategories, (categories: Category[]) => (!!categories ? categories.length : 0));
