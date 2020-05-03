import React, {Component} from 'react';
import {Button} from 'primereact/button';
import { withRouter } from 'react-router-dom';
import GetLotties from '../LottieComponent/GetLotties';
import timesUpLottie from '../LottieJson/times-up.json';
import '../CSS/Finish.css'
class FinishTime extends Component{

    render(){
        const optionStyle= {
            fontFamily: '"Lucida Console", Courier, monospace',
            fontSize:'18px',
            color: '#dbf0f8bd',
            background:'#D6683A', 
            borderColor:'#D6683A',
            width:'10%',
            padding: '2px',
        }
        return(
            <div>
                <div className='finishLottieStyle'>
                    <h2>Uppss! Game Over :(</h2>
                    <h1>Score: {this.props.location.state}</h1>
                    <div className='lotties'>
                        <GetLotties animationData={timesUpLottie} />                          
                    </div>
                </div>
                <div>
                    <Button label="Try Again" style={optionStyle} onClick={() => this.props.history.push("/")}/>
                </div>
            </div>
        );
    }
}
export default withRouter(FinishTime);