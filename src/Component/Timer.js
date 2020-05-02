import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Timer extends Component{
  constructor() {
    super();
    this.state = {
      time: {}, seconds: 15, 
    };
    this.timer =0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
}

componentDidMount(){ 
  let timeLeftVar = this.secondsToTime(this.state.seconds);
  this.setState({ time: timeLeftVar });
  this.startTimer();
}

secondsToTime(secs){

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    "m": minutes,
    "s": seconds
  };
  return obj;
}

startTimer() {
  if (this.timer === 0 && this.state.seconds > 0) {
    this.timer = setInterval(this.countDown, 1000);
  }
  
}

countDown() {
 
  let seconds = this.state.seconds - 1;
  this.setState({
    time: this.secondsToTime(seconds),
    seconds: seconds,
  });

  if ( seconds === 0 ) {  
    return this.props.history.push("/time-up");     
  } 
    
}
render() {
  return(
    <div>
      Time: {this.state.time.s}
    </div>
  );
}

}export default withRouter(Timer);