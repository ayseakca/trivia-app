import React, {Component} from 'react';
import '../CSS/Lottie.css';
import GetLotties from '../LottieComponent/GetLotties';
import bottomLottie from '../LottieJson/duck-out.json';
import '../CSS/Quiz.css';
class Question extends Component {

    constructor() {
        super();
        this.state = {
            option1: '',
            option2: '',
            option3: '',
            option4: ''
        };
        this.answers = [];
        this.shuffleParam = [];
    }

    shuffle = (array) => {
        let tmp, current, top = array.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    };

    render() {


        const utf8 = require('utf8');
        return (
            <div>
                <div className="divStyleQuestion">
                    <p className="questionStyle" src={utf8.js} >{this.props.quiz.question}</p>
                    <p>
                        <button className="optionStyle" src={utf8.js}
                                onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, this.props.quiz.answers[0])}>{this.props.quiz.answers[0]}</button>
                    </p>
                    <p>
                        <button className="optionStyle" src={utf8.js}
                                onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, this.props.quiz.answers[1])}>{this.props.quiz.answers[1]}</button>
                    </p>
                    <p>
                        <button className="optionStyle" src={utf8.js}
                                onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, this.props.quiz.answers[2])}>{this.props.quiz.answers[2]}</button>
                    </p>
                    <p>
                        <button className="optionStyle" src={utf8.js}
                                onClick={(quiz, answer) => this.props.sendAnswer(this.props.quiz, this.props.quiz.answers[3])}>{this.props.quiz.answers[3]}</button>
                    </p>
                </div>
                <div className="bottomLottie">
                  <div className='lotties'>
                      <GetLotties animationData={bottomLottie}/>
                  </div>
                </div>
            </div>
        );

    }

}

export default Question;
