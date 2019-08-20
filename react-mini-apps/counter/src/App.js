import React, {Component} from 'react';

class App extends Component {

  state = {
    hours: 0,
    minutes: 0,
    seconds: 25,
    start: false
  }

  handleTimer() {
    clearInterval(this.myInterval)
    let {hours, minutes, seconds} = this.state;
    this.myInterval = setInterval(() => {
      if (this.state.start) {
        if (hours ===0 && minutes === 0 && seconds === 0) {
          this.setState({hours, minutes, seconds});
        } else {
          if (seconds === 0) {
            seconds = 59;
            if (minutes === 0) {
              minutes = 59;
              if (hours !== 0) {
                hours--;
              }
            } else {
              minutes --;
            }
          } else {
            seconds--;
          }
          this.setState({hours, minutes, seconds});
        }
      }
    }, 1000)
  }

  handleStart = () => {
    let {start} = this.state;
    start = true;
    this.setState({start})
    this.handleTimer()
  }

  handleStop= () => {
    let {start} = this.state;
    start = false;
    
    this.setState({start})
    this.handleTimer()
  }

  handleReset = () =>{
    let {hours, minutes, seconds, start} = this.state;
    hours = 2;
    minutes = 0;
    seconds = 0;
    start = false;
    this.setState({hours, minutes, seconds, start})
    this.handleTimer()
  }

  render() { 
    return (
      <div className="timer">
          <h4 className="count-down border bg-white">
            {this.state.hours} : {this.state.minutes} : {this.state.seconds}
          </h4>
          <div>
            <button onClick={this.handleStart} className="d-inline-block btn btn-primary mr-2">Start</button>
            <button onClick={this.handleStop} className="d-inline-block btn btn-danger mr-2">Stop</button>
            <button onClick={this.handleReset} className="btn btn-warning">Reset</button>
          </div>


      </div>
    );
  }

}
 
export default App;

