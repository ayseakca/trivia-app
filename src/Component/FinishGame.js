import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import GetLottie from '../LottieComponent/GetLotties';
import {Button} from 'primereact/button';
import fireworks from '../LottieJson/fireworks.json'
import '../CSS/Finish.css'

class FinishGame extends Component{

    render(){
        const optionStyle= {
            fontFamily: '"Lucida Console", Courier, monospace',
            fontSize:'18px',
            color: '#dbf0f8bd',
            background:'rgb(253, 127, 9)', 
            borderColor:'rgb(253, 127, 9)',
            width:'10%',
            padding: '2px',
            margin: '0.5%',
        }
        return(
            <div>
                <div className='finishLottieStyle'>
                <div className="gameOver"><h2>Congratulations to you!!!</h2></div>
                <div className="point"> <h1>Total Point: {this.props.location.state}</h1></div>
                    <div className='lotties'><GetLottie animationData={fireworks}/></div>
                </div>
                <div>
                    <Button style={optionStyle} label={'Play Again' } onClick={() => this.props.history.push("/")}/>
                </div>
            </div>
        );
    }
}
export default withRouter(FinishGame);