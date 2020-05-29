import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ModalController, Platform, AlertController } from '@ionic/angular';

import { TicketConfigComponent } from './ticket-config.component';
import { Base64 } from '@ionic-native/base64/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

describe('TicketConfigComponent', () => {
    let component: TicketConfigComponent;
    let fixture: ComponentFixture<TicketConfigComponent>;

    const alertCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
    };
    const modalControllerStub = {
        dismiss: (data?: any, role?: string, id?: string) => Promise.resolve(true),
    };
    const base64Stub = {
        encodeFile: (path: string) => Promise.resolve('aaaaaaaaaaaaaa'),
    };
    const fileChooserStub = {
        open: (options: any) => Promise.resolve('imageNativePath'),
    };
    const filePathStub = {
        resolveNativePath: (path: string) => Promise.resolve('imageNativePathResolved'),
    };
    const platformStub = {
        is: (path: string) => Promise.resolve(true),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TicketConfigComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([])],
            providers: [
                { provide: AlertController, useValue: alertCtrlStub },
                { provide: ModalController, useValue: modalControllerStub },
                { provide: Base64, useValue: base64Stub },
                { provide: FileChooser, useValue: fileChooserStub },
                { provide: FilePath, useValue: filePathStub },
                { provide: Platform, useValue: platformStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TicketConfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
