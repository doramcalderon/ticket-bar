import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StorageService } from '../storage.service';
import { ConfigPage } from './config.page';

describe('ConfigPage', () => {
    let component: ConfigPage;
    let fixture: ComponentFixture<ConfigPage>;

    const storageServiceStub = {
        getObject: (key: string) => Promise.resolve({}),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConfigPage],
            imports: [IonicModule.forRoot()],
            providers: [{ provide: StorageService, useValue: storageServiceStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
