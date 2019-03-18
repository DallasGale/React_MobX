import { action, decorate, observable } from 'mobx';

class Store {
    employeesList = [
        {
            name: 'Dallas Gale', 
            salary: '125000'
        },
        {
            name: 'Clyde Thompson',
            salary: '150000'
        }
    ]

    // * Actions
    // * Originally these methods were part of controls.container.js
    clearList() {
        // console.log('cleared');
        this.employeesList = [];
    }

    addEmployee(e) {
        this.employeesList.push(e);
    }
};

 // * With MobX
 decorate(Store, {
    clearList: action,
    addEmployee: action,
    employeesList: observable
});

export const appStore = new Store();
