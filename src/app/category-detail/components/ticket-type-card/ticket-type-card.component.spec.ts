import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTypeCardComponent } from './ticket-type-card.component';
import { Ticket } from '../../../cart/store/cart.model';
import { CartService } from '../../../cart/store/cart.service';

describe('TicketTypeCardComponent', () => {
    let component: TicketTypeCardComponent;
    let fixture: ComponentFixture<TicketTypeCardComponent>;

    const cartServiceStub = {
        addTicket: (ticket: Ticket, count?: number) => {},
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TicketTypeCardComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: CartService, useValue: cartServiceStub }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TicketTypeCardComponent);
        component = fixture.componentInstance;
        component.type = {
            name: 'foo',
            price: 0,
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
