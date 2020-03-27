import { Injectable } from '@angular/core';

import { chunk } from 'lodash';
import { BluetoothDevice } from './cart-preview.model';

declare var window: any;

@Injectable({
    providedIn: 'root',
})
export class BTPrinterService {
    /**
     * List the bluetooth paired devices.
     */
    public async listDevices(): Promise<BluetoothDevice[]> {
        let result: Promise<BluetoothDevice[]>;

        await window.BTPrinter.list(
            (data: any[]) => {
                const devices: BluetoothDevice[] = chunk(data, 3).map(d => this.toDevice(d));
                result = Promise.resolve(devices);
            },
            error => {
                result = Promise.reject(result);
                console.error('error listing devices', error);
            },
        );
        return result;
    }

    /**
     * Connect to a printer and prints an image.
     * @param printer Printer.
     * @param base64Img Base64 image.
     */
    public connectAndPrint(printer: BluetoothDevice, base64Img: string): Promise<any> {
        return new Promise((resolve, reject) => {
            window.BTPrinter.connect(
                connected => {
                    window.BTPrinter.printBase64(
                        printResult => {
                            this.disconnect(printer);
                            resolve(printResult);
                        },
                        error => {
                            console.log('error printing image', error);
                            this.disconnect(printer);
                            reject(error);
                        },
                        base64Img,
                        '0',
                    );
                },
                error => {
                    console.error('error connecting to ' + printer.name, error);
                    reject(error);
                },
                printer.name,
            );
        });
    }

    /**
     * Disconnect from printer.
     * @param printer Printer.
     */
    private async disconnect(printer: BluetoothDevice): Promise<any> {
        let result: Promise<any>;

        await window.BTPrinter.disconnect(
            data => {
                result = Promise.resolve(data);
                console.log('Disconnected', data);
            },
            error => {
                result = Promise.reject(error);
                console.log('Error disconnecting', error);
            },
            printer.name,
        );

        return result;
    }

    /**
     * Convert in objects the device properties array returned by the plugin.
     * @param deviceAsArray Device properties array returned by the plugin.
     */
    private toDevice(deviceAsArray: any[]): BluetoothDevice {
        return {
            name: deviceAsArray[0],
            address: deviceAsArray[1],
            type: deviceAsArray[2],
        };
    }
}
