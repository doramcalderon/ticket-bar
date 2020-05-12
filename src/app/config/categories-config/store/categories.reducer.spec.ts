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

    describe(`[Categories] Add Category actions`, () => {
        it(`[Categories] addCategory: should return the same state`, () => {
            const category: Category = {
                id: 'foo',
                name: 'bar',
            };
            const state: CategoriesState = { categories: [] };

            const addCategoryAction = CategoriesActions.addCategory({
                category,
            });
            const newState: CategoriesState = reducer(state, addCategoryAction);

            expect(newState).toEqual(state);
        });

        it(`[Categories] addCategorySuccess: should return the state with the new category added`, () => {
            const categories: Category[] = [
                {
                    id: 'foo',
                    name: 'bar',
                },
            ];
            const state: CategoriesState = { categories: [] };
            const expectedSstate: CategoriesState = { categories };

            const addCategorySuccessAction = CategoriesActions.addCategorySuccess({
                categories,
            });
            const newState: CategoriesState = reducer(state, addCategorySuccessAction);

            expect(newState).toEqual(expectedSstate);
        });

        it('[Categories] addCategoryFailure: should return the same state and the thrown error', () => {
            const state: CategoriesState = { categories: [] };
            const expectedState: CategoriesState = {
                ...state,
                error: 'Unknown error',
            };

            const addCategoryFailureAction = CategoriesActions.addCategoryFailure({
                error: 'Unknown error',
            });
            const newState: CategoriesState = reducer(state, addCategoryFailureAction);

            expect(newState).toEqual(expectedState);
        });
    });
});
