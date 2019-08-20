import React, {Component} from 'react';

class TodoItem extends Component {

    completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    render() { 
        return ( 
        <div className = "todo-item">
            <input 
                type = "checkbox" 
                onChange={ () => this.props.handleChange(this.props.item.id)} 
                checked={this.props.item.completed} 
                />
            <p style={this.props.item.completed ? this.completedStyle : null}>{this.props.item.text}</p>
        </div>
         );
    }
}
 
export default TodoItem;
