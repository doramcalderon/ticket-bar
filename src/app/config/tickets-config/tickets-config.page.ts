import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Category, TicketType } from 'src/app/common/model/category.model';
import * as CategoriesActions from '../categories-config/store/categories.actions';
import * as CategoriesSelectors from '../categories-config/store/categories.selectors';

@Component({
    selector: 'tb-tickets-config',
    templateUrl: 'tickets-config.page.html',
    styleUrls: ['tickets-config.page.scss'],
})
export class TicketsConfigPage implements OnInit, OnDestroy {
    public categories$: Observable<Category[]>;
    public tickets: TicketType[];

    private ticketsSubscription: Subscription;
    private categories: Category[];

    constructor(private categoriesStore: Store<Category>) {}

    async ngOnInit() {
        this.categories$ = this.categoriesStore.select(CategoriesSelectors.selectCategories);
        this.ticketsSubscription = this.categories$.subscribe((categories) => {
            this.categories = categories;
            this.concatTickets(categories);
        });
    }

    ngOnDestroy() {
        this.ticketsSubscription.unsubscribe();
    }

    public openTicketConfig(ticket: TicketType): void {
        const category: Category = this.categories.find((c) => !!c.tickets.find((t) => t.name === ticket.name));
        this.categoriesStore.dispatch(CategoriesActions.openTicketConfig({ category, ticket }));
    }

    private concatTickets(categories: Category[]): void {
        if (!!categories) {
            this.tickets = categories.reduce(
                (tickets: TicketType[], category) => (!!category.tickets ? tickets.concat(category.tickets) : tickets),
                [],
            );
            this.tickets = this.tickets.sort((a, b) => {
                const ticketA: string = a.name.toUpperCase();
                const ticketB: string = b.name.toUpperCase();

                if (ticketA > ticketB) {
                    return 1;
                }
                if (ticketB > ticketA) {
                    return -1;
                }
                return 0;
            });
        }
    }
}
