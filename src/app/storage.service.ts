import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor(public storage: Storage) {}
    // set a key/value
    async set(key: string, value: any): Promise<any> {
        try {
            await this.storage.set(key, value);
            return true;
        } catch (reason) {
            console.error('Error setting a value in the storage', reason);
            return false;
        }
    }
    // to get a key/value pair
    async get(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            return result;
        } catch (reason) {
            console.error(`Error getting the value with the key ${key}`, reason);
            return null;
        }
    }
    // set a key/value object
    async setObject(key: string, object: any) {
        try {
            await this.storage.set(key, JSON.stringify(object));
            return true;
        } catch (reason) {
            console.error('Error setting object', reason);
            return false;
        }
    }
    // get a key/value object
    async getObject(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            if (!!result) {
                return JSON.parse(result);
            }
            return null;
        } catch (reason) {
            console.error('Error getting an object', reason);
            return null;
        }
    }
    // remove a single key value:
    remove(key: string) {
        this.storage.remove(key);
    }
    //  delete all data from your application:
    clear() {
        this.storage.clear();
    }
}
