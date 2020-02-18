import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketUnitsSelectorComponent } from './ticket-units-selector.component';
import { By } from '@angular/platform-browser';

describe('TicketUnitsSelectorComponent', () => {
    let component: TicketUnitsSelectorComponent;
    let fixture: ComponentFixture<TicketUnitsSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TicketUnitsSelectorComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TicketUnitsSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit add event when the add button is clicked', () => {
        spyOn(component.add, 'emit');
        component.ticketsNumber = 2;
        fixture.detectChanges();

        const addButton: HTMLButtonElement = fixture.debugElement.query(By.css('.button_add')).nativeElement;
        addButton.click();

        expect(component.add.emit).toHaveBeenCalledWith(2);
    });

    it('should emit remove event when the remove button is clicked', () => {
        spyOn(component.remove, 'emit');
        component.ticketsNumber = 1;
        fixture.detectChanges();

        const removeButton: HTMLButtonElement = fixture.debugElement.query(By.css('.button_remove')).nativeElement;
        removeButton.click();

        expect(component.remove.emit).toHaveBeenCalledWith(1);
    });
});
