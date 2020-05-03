import React, {Component} from 'react';
import {notification} from 'antd';
import Question from './Question';
import {getQuestionByCategoryAndDifficulty} from '../utils/APIUtil';
import '../CSS/App.css';
import GameOver from './GameOver';
import FinishGame from './FinishGame';
import {withRouter} from 'react-router';

 

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: {"m": 0, "s": 15}, seconds: 15,
            quiz: [],
            result: true,
            sendQuiz: null
        };
        this.index = 0;
        this.point = 0;
        this.timer = 0;
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

    shuffleAnswer = (quiz) => {
        let a = [], i = 0;
        this.answers = [quiz.correct_answer, quiz.incorrect_answers[0], quiz.incorrect_answers[1], quiz.incorrect_answers[2]];

        for (; i < 4; ++i) a[i] = i;
        this.shuffleParam = this.shuffle(this.answers);
        this.setState({
            sendQuiz: {
                question: quiz.question,
                answers: this.shuffleParam,
                correct_answer: quiz.correct_answer
            }
        })
    };

    componentDidMount() {
        this.countDown();
        this.startTimer();
        const categoryId = this.props.location.state.categoryId;
        const difficulty = this.props.location.state.difficulty;

        getQuestionByCategoryAndDifficulty(categoryId, difficulty)
            .then(data => {
                this.setState({quiz: data.results});
                this.shuffleAnswer(data.results[0]);
            }).catch(error => {
            notification.error({
                message: 'Trivia Game',
                description: "Upps! Something goes wrong :(",
            });
        });
    }

    sendAnswer = (quiz, answer) => {
        let s = this.state.seconds;
        this.setState({result: quiz.correct_answer === answer, seconds: 15, time: {"m": 0, "s": 15}});
        this.startTimer();
        if(quiz.correct_answer !== answer){
            this.setState({result: false});
        } else if (this.state.quiz.length - 1 > this.index) {
            this.point = this.point + s *10;
            this.index = this.index + 1;
            this.shuffleAnswer(this.state.quiz[this.index]);
        } else if (this.state.quiz.length - 1 === this.index) {
            this.point = this.point + s *10;
            this.index = this.index + 1;
        }

    };

    secondsToTime = (secs) => {

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "m": minutes,
            "s": seconds
        };
        return obj;
    };

    startTimer = () => {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }

    };

    countDown = () => {
        this.renderTime = <div>
            Time: {this.state.time.s}
        </div>;

        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        if (seconds === 0) {
            clearInterval(this.timer);
            return  this.props.history.push("/time-up", this.point);
        }

    };

    render() {

        if (this.state.result && this.state.sendQuiz !== null) {
            if (this.state.quiz.length === this.index) {
                return (<FinishGame point={this.point}/>)
            } else {
                return (
                    <div>
                        <div className="labelStyle">
                            
                             <label  className="labelStyle">Question : {this.index + 1}/{this.state.quiz.length} </label> <label className="labelStyle">Point : {this.point}</label>
                
                        </div>
                        <div className="timerStyle">
                            {this.renderTime}
                        </div>
                        <Question quiz={this.state.sendQuiz}
                                  sendAnswer={(quiz, answer) => this.sendAnswer(quiz, answer)}/>
                    </div>
                );
            }
        } else if (!this.state.result) {
            clearInterval(this.timer);
            return (
                <div>
                    <GameOver point={this.point}/>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Loading...</h3>
                </div>);

        }

    }

}
export default withRouter(Quiz);