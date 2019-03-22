import { action, decorate, observable } from 'mobx';


class RootStore {
    constructor() {
        this.employeeStore = new EmployeeStore(this);
        this.counterStore = new CounterStore(this);
    }
};

class CounterStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    count = 10    

    incrementCount() {
        this.count++;
        console.log(this.count)
    }

    decrementCount() {
        this.count--;
        console.log(this.count)
    }
}


class EmployeeStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }





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

    clearList() {
        this.employeesList = [];
    }
    
    addEmployee(e) {
        this.employeesList.push(e);
        console.log(e);
        console.log(this.employeesList);
    }
}



 // * With MobX
 decorate(RootStore, {
    addEmployee: action,
    clearList: action,
    decrementCount: action,
    employeesList: observable,
    count: observable,
    incrementCount: action,
    
});

export const appStore = new RootStore();
