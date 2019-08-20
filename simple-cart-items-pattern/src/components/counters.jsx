import React, { Component } from 'react';
import Counter from './counter.jsx'

class Counters extends Component {

    render() { 
        console.log('Counters - Rendered');
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props; //destructuring!
        return ( 
        <div>
            <button 
                className="btn btn-primary btn-sm m-2"
                onClick={onReset}
            >
                Reset
            </button>
            {counters.map(counter => (
            <Counter 
                key={counter.id} 
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement ={onDecrement} 
                counter={counter}
                >
            </Counter>
            ))} 
        </div> );
    };

}
 
export default Counters;