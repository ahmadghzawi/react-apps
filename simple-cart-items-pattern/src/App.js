import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar.jsx'
import Counters from './components/counters.jsx'

class App extends Component {

  state = { 
    counters: [
        {id: 1, value: 4, disabled: false},
        {id: 2, value: 0, disabled: true},
        {id: 3, value: 0, disabled: true},
        {id: 4, value: 0, disabled: true}
    ]
  };
 
  constructor(props){
   super(props);
   console.log('App - Constructor', this.props);
  };

  componentDidMount(){
   console.log('App - Mounted')
  };
 
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    counters[index].value === 0 ? counters[index].disabled = true : counters[index].disabled = false; 
    this.setState({counters});
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    counters[index].value === 0 ? counters[index].disabled = true : counters[index].disabled = false; 
    this.setState({counters});
  };

  handleDelete = counterId => {
    // console.log('Event handler called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters}) //because key and value are the same {counters: counters}
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
        });
        this.setState({counters})
  };

  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value >0).length}
        />
        <main className='container-fluid'>
          <Counters
          counters={this.state.counters} 
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  };

}

export default App;
