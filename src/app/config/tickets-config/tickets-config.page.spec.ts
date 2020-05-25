import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { TicketsConfigPage } from './tickets-config.page';

describe('TicketsConfigPage', () => {
    let component: TicketsConfigPage;
    let fixture: ComponentFixture<TicketsConfigPage>;

    const storeStub = {
        select: (selector: any) => of([]),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TicketsConfigPage],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([])],
            providers: [{ provide: Store, useValue: storeStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(TicketsConfigPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
