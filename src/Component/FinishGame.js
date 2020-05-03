import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import GetLottie from '../LottieComponent/GetLotties';
import fireworks from '../LottieJson/fireworks.json'
import '../CSS/Finish.css'
class FinishGame extends Component{

    render(){
        return(
            <div>
                <div className='finishLottieStyle'>
                <div className="gameOver"><h2>Congratulations to you!!!</h2></div>
                <div className="point"> <h1>Total Point: {this.props.point}</h1></div>
                    <div className='lotties'><GetLottie animationData={fireworks}/></div>
                </div>
                <div>
                    <button className='buttonStyle' onClick={() => this.props.history.push("/")}>Play Again </button>
                </div>
            </div>
        );
    }
}
export default withRouter(FinishGame);