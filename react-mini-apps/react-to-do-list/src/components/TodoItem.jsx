import React, { Component } from 'react';

class TodoItem extends Component {

    render() { 
        return ( 
            <div 
                className="todo-item mb-4"
                onClick={() => this.props.handleClick(this.props.item.id)}
            >
                <p className="float-left">{this.props.item.todoText}</p>
                <button 
                    className="float-right btn btn-danger" 
                >
                    X
                </button>
            </div>
         );
    }
}
 
export default TodoItem;