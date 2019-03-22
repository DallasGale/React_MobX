import React, { Component } from 'react';

class Controls extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            theme: ''
        }

    }



    addEmployee = () => {
        const name = prompt("Name: ")
        const salary = parseInt(prompt("Salary: "), 10)
        this.props.store.employeeStore.addEmployee({name, salary})
    }

    clearList = () => {
        this.props.store.employeeStore.clearList();
    }

    render() {
        // console.log(this.props.store.employeeStore)
        return (
            <div>
                <button onClick={ () => this.clearList() }>clear table</button>
                <button onClick={ () => this.addEmployee() }>add employee</button>
            </div>
        );
    }
}

export default Controls;