import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Button} from 'primereact/button';
import GetLottie from '../LottieComponent/GetLotties';
import wrongLottie from '../LottieJson/wrongAnswer.json'
import '../CSS/Finish.css'

class GameOver extends Component{

    render(){
        const optionStyle= {
            fontFamily: '"Lucida Console", Courier, monospace',
            fontSize:'18px',
            color: '#dbf0f8bd',
            background:'rgba(245, 14, 14, 0.904) ', 
            borderColor:'rgba(245, 14, 14, 0.904)  ',
            width:'10%',
            padding: '2px',
         
        }
        return(
            <div>
                <div>
                    <div className="gameOver"> <h2>Uppss! Game Over :( </h2></div>
                    <div className="point"><h1>Total Point: {this.props.location.state}</h1> </div>
                    <div className="gameOverLottieStyle">
                        <div className='lotties'>
                            <GetLottie animationData={wrongLottie}/>
                        </div>
                    </div>
                </div>
                <div>
                    <Button label="Try Again" style={optionStyle} onClick={() => this.props.history.push("/")}/>
                </div>

            </div>
        );
    }
}
export default withRouter(GameOver);