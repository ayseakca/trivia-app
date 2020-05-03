import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import GetLottie from '../LottieComponent/GetLotties';
import wrongLottie from '../LottieJson/wrongAnswer.json'
import '../CSS/Finish.css'

class GameOver extends Component{

    render(){
        return(
            <div>
                <div>
                    <div className="gameOver"> <h2>Uppss! Game Over :( </h2></div>
                    <div className="point"><h1>Total Point: {this.props.point}</h1> </div>
                    <div className="gameOverLottieStyle">
                        <div className='lotties'>
                            <GetLottie animationData={wrongLottie}/>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='buttonStyle' onClick={() => this.props.history.push("/")}>Try Again </button>
                </div>

            </div>
        );
    }
}
export default withRouter(GameOver);