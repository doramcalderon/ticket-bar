import { Category } from 'src/app/common/model/category.model';
import { CategoriesState, categoriesFeatureKey } from './categories.reducer';
import { selectCategories, selectCategoriesState, selectCategoriesCount } from './categories.selectors';

describe('Cart Selectors', () => {
    let state: CategoriesState;
    beforeEach(() => {
        state = {
            categories: [
                {
                    id: 'Bebida',
                    name: 'Bebida',
                },
                {
                    id: 'Comida',
                    name: 'Comida',
                },
            ],
        };
    });

    it('should select the feature state', () => {
        const result: CategoriesState = selectCategoriesState({ [categoriesFeatureKey]: state });
        expect(result).toEqual(state);
    });

    describe('#selectCategories', () => {
        it('should return the categories of the state', () => {
            const expected: Category[] = state.categories;
            const selection: Category[] = selectCategories.projector(state);
            expect(selection).toEqual(expected);
        });
    });

    describe('#selectCategoriesCount', () => {
        it('should return the number of categories of the state', () => {
            const expected: number = state.categories.length;
            const selection: number = selectCategoriesCount.projector(state.categories);
            expect(selection).toEqual(expected);
        });
    });
});
