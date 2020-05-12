import { Action, createReducer, on } from '@ngrx/store';

import { Category } from '../../../common/model/category.model';
import * as CategoriesActions from './categories.actions';

export const categoriesFeatureKey = 'categories';

export interface CategoriesState {
    categories?: Category[];
    error?: any;
}

export const initialState: CategoriesState = {
    categories: [],
};

const categoriesReducer = createReducer(
    initialState,

    on(CategoriesActions.loadCategories, (state) => state),
    on(CategoriesActions.loadCategoriesSuccess, (state, action) => state),
    on(CategoriesActions.loadCategoriesFailure, (state, action) => state),
    on(CategoriesActions.emptyCategories, (state: CategoriesState, action) => initialState),

    on(CategoriesActions.addCategory, (state: CategoriesState) => state),
    on(CategoriesActions.addCategorySuccess, (state: CategoriesState, action) => {
        return { ...state, categories: action.categories };
    }),
    on(CategoriesActions.addCategoryFailure, (state: CategoriesState, action) => {
        return { ...state, error: action.error };
    }),
);

export function reducer(state: CategoriesState | undefined, action: Action) {
    return categoriesReducer(state, action);
}
