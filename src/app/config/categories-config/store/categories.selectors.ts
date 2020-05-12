import { createFeatureSelector } from '@ngrx/store';

import * as fromCategories from './categories.reducer';

export const selectCategoriesState = createFeatureSelector<fromCategories.CategoriesState>(fromCategories.categoriesFeatureKey);
