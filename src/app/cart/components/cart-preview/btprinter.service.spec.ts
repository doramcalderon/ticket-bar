import { TestBed } from '@angular/core/testing';
import { BTPrinterService } from './btprinter.service';

describe('BTPrinterService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BTPrinterService = TestBed.get(BTPrinterService);
        expect(service).toBeTruthy();
    });
});
