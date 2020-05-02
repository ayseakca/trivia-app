import React from 'react';
class Example extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 15 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    console.log("mount sec",this.state.seconds);
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
      console.log("this.timer ",this.timer);
    }
  }

  countDown() {///////////////////////////////////////////////////////
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    ////Buraları ile oynaycan beboo
    // Check if we're at zero.
    if (seconds == 0) { 
        //clearInterval(this.timer);
        this.setState({seconds:15});
        this.startTimer();
        
    }
    console.log("bura dönüyo mu");/////////////////////////////////
  }

  render() {
      this.startTimer();
    return(
      <div>
       s: {this.state.time.s}
      </div>
    );
  }
}

/*class Example extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds:''};
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
      console.log("stt de ", secs);
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "s": seconds
      };
      return obj;
    }
   // setSeconds(secs){
   //    return this.setState=({seconds:15})
    //}
    componentDidMount() {
     this.state.seconds=this.times;
    
      console.log("did de ", this.state.seconds);
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
      if (this.timer == 0 && this.state.seconds > 0) {
        console.log("if de ", this.state.seconds);
        this.timer = setInterval(this.countDown, 1000);
        console.log("if de timer ", this.timer);
      }
    }
  
    startTimer() {
      if (this.timer == 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      console.log("coundownda ",this.state.time," sec ", this.state.seconds);
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
      }
    }
  
    render() {
        this.timeCount = this.props.times;
      
    //  console.log(timer);
      return(
        <div>
          s: {this.state.time.s}
        </div>
      );
    }
  }
  */
export default Example;