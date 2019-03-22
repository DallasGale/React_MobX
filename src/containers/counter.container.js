import React from 'react';
import { observer } from 'mobx-react';

class Counter extends React.Component {

    constructor() {
        super()        
    }

    increment = () => {
        this.props.store.counterStore.incrementCount();
    }

    decrement = () => {
        this.props.store.counterStore.decrementCount();
    }

    render() { 

        return (
            
            
            <div>
                Counter: { this.props.store.counterStore.count }
                <button onClick={ () => this.increment() }> + </button>
                <button onClick={ () => this.decrement() }> - </button>
            </div>
          );
    }
}

Counter = observer(Counter);
 
export default Counter;