import * as localforage from 'localforage';

import sessionStorageWrapper from 'localforage-sessionstoragewrapper';

const sessionStore = localforage.createInstance({
    name: "sessionStore",
})
sessionStore.defineDriver(sessionStorageWrapper).then(function () {
    return localforage.setDriver(sessionStorageWrapper._driver);
})

class SessionStorage {
    private store = sessionStore;
    public getItem(key: string): Promise<unknown> {
        return this.store.getItem(key);
    }

    public setItem(key: string, value: unknown): Promise<unknown> {
        return this.store.setItem(key, value)
    }

    public removeItem(key: string): Promise<unknown> {
        return this.store.removeItem(key);
    }
}

export const sessionStorage = new SessionStorage();
