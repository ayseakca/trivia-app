import React, { Component } from 'react';
import { notification } from 'antd';
import Question from './Question';
import { getQuestionByCategoryAndDifficulty } from '../utils/APIUtil';
import '../CSS/App.css';
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import '../CSS/timer.css';
import fireworks from '../LottieJson/fireworks.json'
import GetLottie from '../LottieComponent/GetLotties'

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state = {
            quiz:  [],    
            result: true
        };
        this.index = 0;
        this.point=0;
        this.time = true;

    }

    async componentDidMount() {
        const categoryId = this.props.location.state.categoryId;
        const difficulty = this.props.location.state.difficulty;

        getQuestionByCategoryAndDifficulty(categoryId, difficulty)
            .then(data => {
                this.setState({quiz: data.results})       
            }).catch(error => {
                console.log(error);
                notification.error({
                    message: 'Trivia Game',
                    description: "Upps! Something goes wrong :(",
                });
            });
      }


    sendAnswer = (quiz, answer) => {
        this.time = false;
        
        this.setState({result: quiz.correct_answer === answer});
        if(this.state.quiz.length-1 > this.index){
            this.point=this.point+100;
            this.index=this.index+1;            
        }else if(this.state.quiz.length-1 == this.index){
            this.point=this.point+100;
            this.index=this.index+1;
        }else{
            this.state.result=false;
        }

  };

    

    render(){
        

       if(this.state.result){             
            if(this.state.quiz.length==this.index){
                return (
                    <div>
                    <h3>Congratulations to you!!!</h3>
                    <h1>Total Point: {this.point}</h1>
                    <div className='lotties'><GetLottie animationData={fireworks}/></div>
                    </div> );  
            }else{
                return (
                    <div>
                        <div>
                            <div className="labelStyle" >
                                <label >Question:{this.index+1}/{this.state.quiz.length} Point:{this.point}</label>
                            </div> 
                        </div>
                        <Question quiz={this.state.quiz[this.index]} sendAnswer={(quiz, answer) => this.sendAnswer(quiz, answer)}/>
                    </div>
                );       
            }
        }else if(!this.state.result) {
            return (
                <div>
                    <h2>Uppss! Game Over :(</h2>
                    <h1>Score: {this.point-100}</h1> 
                </div> 
            )
        }

    }

}
export default Quiz;