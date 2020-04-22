import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { TicketConfigComponent } from './ticket-config.component';

describe('TicketConfigComponent', () => {
    let component: TicketConfigComponent;
    let fixture: ComponentFixture<TicketConfigComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TicketConfigComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([])],
            providers: [],
        }).compileComponents();

        fixture = TestBed.createComponent(TicketConfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
