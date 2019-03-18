import React, { Component } from 'react';

class Controls extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            theme: ''
        }
    }


    addEmployee = () => {
        // let add = this.props.store.addEmployee;
        const name = prompt("Name: ")
        const salary = parseInt(prompt("Salary: "), 10)
        this.props.store.addEmployee({name, salary})
        // console.log(name, salary, this.props.store.addEmployee);
    }

    clearList = () => {
        this.props.store.clearList();
    }

    render() {
        
        return (
            <div>
                <button onClick={ () => this.clearList() }>clear table</button>
                <button onClick={ () => this.addEmployee() }>add employee</button>
            </div>
        );
    }
}

export default Controls;