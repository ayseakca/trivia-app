import React, { Component } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class Timer extends Component{

    render(){

        const renderTime = ({ remainingTime }) => {
          if (remainingTime === 0) {
              return <div className="timer">Too lale...</div>;
          }
        
          return (
            <div className="timer">
              <div className="text">Remaining</div>
              <div className="value">{remainingTime}</div>
              <div className="text">seconds</div>
            </div>
          );
        };
    
        return(
            <div className="timer-wrapper">
                      <CountdownCircleTimer
                                        isPlaying
                                        duration={15}
                                        initialRemainingTime={15}
                                        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                                        onComplete={() => [false, 1000]}
                                    >
                                        {renderTime}
                                    </CountdownCircleTimer>
                                </div>
        );
    }

}export default Timer;