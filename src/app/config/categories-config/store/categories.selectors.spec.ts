import { Category, TicketType } from 'src/app/common/model/category.model';
import { categoriesFeatureKey, CategoriesState } from './categories.reducer';
import * as fromSelectors from './categories.selectors';

describe('Cart Selectors', () => {
    let state: CategoriesState;
    beforeEach(() => {
        state = {
            categories: [
                {
                    id: 'Bebida',
                    name: 'Bebida',
                    tickets: [
                        {
                            name: 'Refresco',
                            price: 2,
                        },
                        {
                            name: 'Cerveza',
                            price: 2,
                        },
                    ],
                },
                {
                    id: 'Comida',
                    name: 'Comida',
                    tickets: [
                        {
                            name: 'Pizza',
                            price: 8,
                        },
                    ],
                },
                {
                    id: 'Otros',
                    name: 'Otros',
                },
            ],
        };
    });

    it('should select the feature state', () => {
        const result: CategoriesState = fromSelectors.selectCategoriesState({ [categoriesFeatureKey]: state });
        expect(result).toEqual(state);
    });

    describe('#selectCategories', () => {
        it('should return the categories of the state', () => {
            const expected: Category[] = state.categories;
            const selection: Category[] = fromSelectors.selectCategories.projector(state);
            expect(selection).toEqual(expected);
        });
    });

    describe('#selectCategoriesCount', () => {
        it('should return the number of categories of the state', () => {
            const expected: number = state.categories.length;
            const selection: number = fromSelectors.selectCategoriesCount.projector(state.categories);
            expect(selection).toEqual(expected);
        });
    });

    describe('#selectTickets', () => {
        it('should return an empty array when there is not categories with tickets', () => {
            state = {
                categories: [
                    {
                        id: 'withoutTickets',
                        name: 'withoutTickets',
                    },
                ],
            };
            const expected: TicketType[] = [];
            const selection: TicketType[] = fromSelectors.selectTickets.projector(state.categories);
            expect(selection).toEqual(expected);
        });

        it('should return the tickets of all categories of the state', () => {
            const expected: TicketType[] = [
                {
                    name: 'Refresco',
                    price: 2,
                },
                {
                    name: 'Cerveza',
                    price: 2,
                },
                {
                    name: 'Pizza',
                    price: 8,
                },
            ];
            const selection: TicketType[] = fromSelectors.selectTickets.projector(state.categories);
            console.log(`selection: ${JSON.stringify(selection)}`);
            console.log(`selection.length: ${selection.length}`);
            expect(selection).toEqual(expected);
        });
    });

    describe('#selectTicketsCount', () => {
        it('should return 0 when there is not categories with tickets', () => {
            const selection: number = fromSelectors.selectTicketsCount.projector([]);
            expect(selection).toEqual(0);
        });

        it('should return the tickets count of all categories of the state', () => {
            const tickets: TicketType[] = [
                {
                    name: 'Refresco',
                    price: 2,
                },
                {
                    name: 'Cerveza',
                    price: 2,
                },
                {
                    name: 'Pizza',
                    price: 8,
                },
            ];
            const selection: number = fromSelectors.selectTicketsCount.projector(tickets);
            expect(selection).toEqual(3);
        });
    });
});
