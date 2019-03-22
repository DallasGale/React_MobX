import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: ''
        }
    }
    render() {

        const { store } = this.props;
        let list = store.employeeStore.employeesList;

        // console.log(list);
        return (
            <table border='0' width='100%' cellPadding='10'>
                <thead bgcolor="black">
                    <tr>
                        <td style={{color: 'white'}}>
                            Emplyee Name
                        </td>
                        <td style={{color: 'white'}}>
                            Emplyee Salary
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((employee, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        { employee.name }
                                    </td>
                                    <td>
                                        { employee.salary}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}


// * With MobX
Table = observer(Table);


export default Table;