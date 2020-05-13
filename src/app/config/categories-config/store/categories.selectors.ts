import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCategories from './categories.reducer';

export const selectCategoriesState = createFeatureSelector<fromCategories.CategoriesState>(fromCategories.categoriesFeatureKey);
export const selectCategories = createSelector(selectCategoriesState, (state: fromCategories.CategoriesState) => state.categories);
