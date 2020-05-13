import { Category } from 'src/app/common/model/category.model';
import { CategoriesState, categoriesFeatureKey } from './categories.reducer';
import { selectCategories, selectCategoriesState } from './categories.selectors';

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
});
