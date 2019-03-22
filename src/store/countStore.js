import { action, decorate, observable } from 'mobx';

class Store {
    count = 0    

    incrementCount() {
        this.count++;
    }

    decrementCount() {
        this.count--;
    }
};


decorate(Store, {
    count: observable,
    incrementCount: action,
    decrementCount: action
});

export const counterStore = new Store();