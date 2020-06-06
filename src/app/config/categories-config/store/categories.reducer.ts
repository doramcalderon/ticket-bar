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
    on(CategoriesActions.loadCategoriesSuccess, (state, action) => {
        return { ...state, categories: action.categories };
    }),

    on(CategoriesActions.emptyCategories, (state: CategoriesState, action) => initialState),

    on(CategoriesActions.addUpdateCategory, CategoriesActions.deleteCategory, (state: CategoriesState) => state),
    on(
        CategoriesActions.addUpdateCategorySuccess,
        CategoriesActions.deleteCategorySuccess,
        CategoriesActions.addTicketToCategorySuccess,
        CategoriesActions.updateTicketSuccess,
        (state: CategoriesState, action) => {
            return { ...state, categories: action.categories };
        },
    ),

    on(
        CategoriesActions.addUpdateCategoryFailure,
        CategoriesActions.loadCategoriesFailure,
        CategoriesActions.deleteCategoryFailure,
        CategoriesActions.openTicketConfigFailure,
        CategoriesActions.addTicketToCategoryFailure,
        CategoriesActions.updateTicketFailure,
        (state: CategoriesState, action) => {
            return { ...state, error: action.error };
        },
    ),
    on(CategoriesActions.openTicketConfig, (state: CategoriesState, action) => state),
);

export function reducer(state: CategoriesState | undefined, action: Action) {
    return categoriesReducer(state, action);
}
