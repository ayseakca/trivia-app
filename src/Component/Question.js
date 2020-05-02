import React, { Component } from 'react';
import '../CSS/Lottie.css';
import GetLotties from '../LottieComponent/GetLotties';
import bottomLottie from '../LottieJson/duck-out.json';
import Timer from './Timer';
//import { withRouter } from 'react-router';


class Question extends Component {

    constructor() {
        super();
        this.state = { option1:'',
                       option2:'',
                       option3:'',
                       option4:''          
                      };
        this.answers=[];
        this.shuffleParam=[];
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
      this.answers=[this.props.quiz.correct_answer,this.props.quiz.incorrect_answers[0],this.props.quiz.incorrect_answers[1],this.props.quiz.incorrect_answers[2]];
      console.log("render geldi")
      for (var a=[],i=0;i<4;++i) a[i]=i;
      this.shuffleParam= this.shuffle(a);
      this.state.option1=this.answers[this.shuffleParam[0]];
      this.state.option2=this.answers[this.shuffleParam[1]];
      this.state.option3=this.answers[this.shuffleParam[2]];
      this.state.option4=this.answers[this.shuffleParam[3]];
      
        console.log("answer ",this.answers[0]);
        
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
                {/* <div>
                  <Timer />
                </div> */}
              <div style={style.divStyle}>
                {console.log("htmldeyim")}
                <p style={style.questionStyle}>{this.props.quiz.question}</p>
                <p><button style={style.buttonStyle} onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, this.state.option1)}>{this.state.option1}</button></p>
                <p><button style={style.buttonStyle} onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, this.state.option2)}>{this.state.option2}</button></p>
                <p><button style={style.buttonStyle} onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, this.state.option3)}>{this.state.option3}</button></p>
                <p><button style={style.buttonStyle} onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, this.state.option4)}>{this.state.option4}</button></p>     
            </div>
            <div className='lotties'>
                 <GetLotties animationData={bottomLottie}/>                          
            </div>
          </div>
        );
       
    }
    
}
export default Question;
