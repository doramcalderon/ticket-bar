import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';

import { Observable, of } from 'rxjs';

import { TicketType } from '../../../common/model/category.model';
import { CartService } from '../../store/cart.service';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;

    const modalCtrlStub = {
        dismiss: (): Promise<boolean> => Promise.resolve(false),
    };
    const cartServiceStub = {
        getSelectCartTickets: (): Observable<TicketType[]> => of([]),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartComponent],
            imports: [IonicModule.forRoot()],
            providers: [
                { provide: ModalController, useValue: modalCtrlStub },
                { provide: CartService, useValue: cartServiceStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
