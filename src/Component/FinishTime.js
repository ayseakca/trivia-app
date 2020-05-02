import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import GetLotties from '../LottieComponent/GetLotties';
import timesUpLottie from '../LottieJson/times-up.json';
import '../CSS/finish.css'
class FinishTime extends Component{

    render(){
        return(
            <div>
                <div className='divStyle'>
                    <div className='lotties'>
                        <GetLotties animationData={timesUpLottie} />                          
                    </div>
                </div>
                <div>
                    <button className='buttonStyle' onClick={() => this.props.history.push("/")}>Try Again</button>
                </div>
            </div>
        );
    }
}
export default withRouter(FinishTime);