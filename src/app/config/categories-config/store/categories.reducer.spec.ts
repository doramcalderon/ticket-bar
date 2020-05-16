import * as CategoriesActions from './categories.actions';
import { CategoriesState, initialState, reducer } from './categories.reducer';
import { Category } from 'src/app/common/model/category.model';

describe('Categories Reducer', () => {
    describe('an unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as any;

            const result = reducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });

    describe(`[Categories] Load Categories actions`, () => {
        it(`[Categories] loadCategories: should return the same state`, () => {
            const state: CategoriesState = { categories: [] };

            const loadCategoriesAction = CategoriesActions.loadCategories();
            const newState: CategoriesState = reducer(state, loadCategoriesAction);

            expect(newState).toEqual(state);
        });

        it(`[Categories] loadCategoriesSuccess: should return the state with the registered categories`, () => {
            const categories: Category[] = [
                {
                    id: 'foo',
                    name: 'bar',
                },
            ];
            const state: CategoriesState = { categories: [] };
            const expectedSstate: CategoriesState = { categories };

            const loadCategoriesSuccessAction = CategoriesActions.loadCategoriesSuccess({
                categories,
            });
            const newState: CategoriesState = reducer(state, loadCategoriesSuccessAction);

            expect(newState).toEqual(expectedSstate);
        });

        it('[Categories] loadCategoriesFailure: should return the same state and the thrown error', () => {
            const state: CategoriesState = { categories: [] };
            const expectedState: CategoriesState = {
                ...state,
                error: 'Unknown error',
            };

            const loadCategoriesFailureAction = CategoriesActions.loadCategoriesFailure({
                error: 'Unknown error',
            });
            const newState: CategoriesState = reducer(state, loadCategoriesFailureAction);

            expect(newState).toEqual(expectedState);
        });
    });
    describe(`[Categories] Add Category actions`, () => {
        it(`[Categories] addCategory: should return the same state`, () => {
            const category: Category = {
                id: 'foo',
                name: 'bar',
            };
            const state: CategoriesState = { categories: [] };

            const addCategoryAction = CategoriesActions.addUpdateCategory({
                category,
            });
            const newState: CategoriesState = reducer(state, addCategoryAction);

            expect(newState).toEqual(state);
        });

        it(`[Categories] addUpdateCategorySuccess: should return the state with the new category added`, () => {
            const categories: Category[] = [
                {
                    id: 'foo',
                    name: 'bar',
                },
            ];
            const state: CategoriesState = { categories: [] };
            const expectedSstate: CategoriesState = { categories };

            const addUpdateCategorySuccessAction = CategoriesActions.addUpdateCategorySuccess({
                categories,
            });
            const newState: CategoriesState = reducer(state, addUpdateCategorySuccessAction);

            expect(newState).toEqual(expectedSstate);
        });

        it('[Categories] addCategoryFailure: should return the same state and the thrown error', () => {
            const state: CategoriesState = { categories: [] };
            const expectedState: CategoriesState = {
                ...state,
                error: 'Unknown error',
            };

            const addUpdateCategoryFailureAction = CategoriesActions.addUpdateCategoryFailure({
                error: 'Unknown error',
            });
            const newState: CategoriesState = reducer(state, addUpdateCategoryFailureAction);

            expect(newState).toEqual(expectedState);
        });
    });
    describe(`[Categories] Delete Category actions`, () => {
        it(`[Categories] deleteCategory: should return the same state`, () => {
            const id = 'bar';
            const state: CategoriesState = {
                categories: [
                    {
                        id: 'foo',
                        name: 'foo',
                    },
                    {
                        id: 'bar',
                        name: 'bar',
                    },
                ],
            };

            const deleteCategoryAction = CategoriesActions.deleteCategory({
                id,
            });
            const newState: CategoriesState = reducer(state, deleteCategoryAction);

            expect(newState).toEqual(state);
        });

        it(`[Categories] deleteCategorySuccess: should return the state without the category removed`, () => {
            const categories: Category[] = [
                {
                    id: 'foo',
                    name: 'bar',
                },
            ];
            const state: CategoriesState = {
                categories: [
                    {
                        id: 'foo',
                        name: 'foo',
                    },
                    {
                        id: 'bar',
                        name: 'bar',
                    },
                ],
            };

            const deleteCategorySuccessAction = CategoriesActions.deleteCategorySuccess({
                categories,
            });
            const newState: CategoriesState = reducer(state, deleteCategorySuccessAction);

            expect(newState.categories).toEqual(deleteCategorySuccessAction.categories);
        });

        it('[Categories] deleteCategoryFailure: should return the same state and the thrown error', () => {
            const state: CategoriesState = {
                categories: [
                    {
                        id: 'foo',
                        name: 'foo',
                    },
                    {
                        id: 'bar',
                        name: 'bar',
                    },
                ],
            };
            const expectedState: CategoriesState = {
                ...state,
                error: 'Unknown error',
            };

            const deleteCategoryFailureAction = CategoriesActions.deleteCategoryFailure({
                error: 'Unknown error',
            });
            const newState: CategoriesState = reducer(state, deleteCategoryFailureAction);

            expect(newState).toEqual(expectedState);
        });
    });
});
