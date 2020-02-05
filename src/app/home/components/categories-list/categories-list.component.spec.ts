import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriesListComponent } from './categories-list.component';

describe('CategoriesListComponent', () => {
    let component: CategoriesListComponent;
    let fixture: ComponentFixture<CategoriesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriesListComponent],
            imports: [IonicModule.forRoot()],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(CategoriesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
