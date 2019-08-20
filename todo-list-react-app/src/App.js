import React, {Component} from 'react';
import TodoItem from "./components/TodoItem"
import TodosData from './components/TodosData'


class App extends Component {

  constructor () {
    super ();
    this.state = {
      todos: TodosData,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (id) {
    const todos = this.state.todos;
    todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      } 
      return todo;
    })
    this.setState({todos})

  }

  render() { 
    const TodoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {TodoComponents}
      </div>
    );
  }

}
 
export default App;

