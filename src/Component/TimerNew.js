import React from 'react';
var seconds, timer=0;
var time = {
    "m": 0,
    "s": seconds
  };

function secondsToTime(secs){

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
  
function startTimer(history, newSeconds) {
    console.log(newSeconds);
    seconds = newSeconds;
    if (timer === 0 && seconds > 0) {
        timer = setInterval(function(){countDown(history)}, 1000);
        return time;
    }
    if ( seconds === 0 ) {  
        clearInterval(timer);
        return history.push("/time-up");     
    }
    
}
  
function countDown(history) {
   console.log(seconds);
    seconds = seconds - 1;
    time = secondsToTime(seconds)
    console.log(time)
    
}

export function getTimer(history){
    let x = startTimer(history, 15);
console.log(x);
    return(
        <div>
            Time: {time.s}
        </div>
      );
}