import React, { Component } from 'react';
import '../CSS/Lottie.css';
import GetLotties from '../LottieComponent/GetLotties';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Timer from "./Timer";
import bottomLottie from '../LottieJson/duck-out.json';


class Question extends Component {

    constructor() {
        super();
        this.state = { };

    }

    shuffle(array) {
        var tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
        }

    render(){

      const answers=[this.props.quiz.correct_answer,this.props.quiz.incorrect_answers[0],this.props.quiz.incorrect_answers[1],this.props.quiz.incorrect_answers[2]]
      if(true){
        for (var a=[],i=0;i<4;++i) a[i]=i;
        a= this.shuffle(a);
        console.log(answers[0]);
        const style = {
          divStyle:{
          position: 'relative',
          margin: 'auto',
          width:'50%',
          padding:'1%',
          background:'#E5B7AF'
          },
          questionStyle:{
            fontSize:'18px',
            paddingBottom :'3%',
            fontFamily: '"Lucida Console", Courier, monospace'
          },
          buttonStyle:{
            fontFamily: '"Lucida Console", Courier, monospace',
            fontSize:'18px',
            background:'#F3B3A7 ',
            width:'50%'
          }
          
        };
      
        return(
          <div>
            <Timer/>
              <div style={style.divStyle}>
                <p style={style.questionStyle}>{this.props.quiz.question}</p>
                <p><button style={style.buttonStyle} onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, answers[a[0]])}>{answers[a[0]]}</button></p>
                <p><button style={style.buttonStyle} onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, answers[a[1]])}>{answers[a[1]]}</button></p>
                <p><button style={style.buttonStyle} onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, answers[a[2]])}>{answers[a[2]]}</button></p>
                <p><button style={style.buttonStyle} onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, answers[a[3]])}>{answers[a[3]]}</button></p>     
              </div>
            <div className='lotties'>
                 <GetLotties animationData={bottomLottie}/>                          
            </div>
          </div>
        );
       }
    }
    
}
export default Question;
