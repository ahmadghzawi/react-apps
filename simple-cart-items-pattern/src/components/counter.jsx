import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {
    
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    };

    componentWillUnmount(){
        console.log('Counter - Unmounted');
    }

    render () { 
        console.log('Counter - Rendered');
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm font-weight-bold m-2"
                >
                    +
                </button>
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm font-weight-bold"
                    disabled={this.props.counter.disabled}
                >
                    -
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    };
    
    formatCount () {
        console.log(this.props.counter);
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };

}
 
export default Counter;