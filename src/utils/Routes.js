import React, {Component} from 'react';
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';
import Welcome from '../Component/Welcome';
import Quiz from '../Component/Quiz';
import FinishTime from '../Component/FinishTime';
import GameOver from '../Component/GameOver';
import FinishGame from '../Component/FinishGame';

class Routes extends Component {

    render() {
        return <div className="layout-content">
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/start-quiz" component={Quiz}/>
                    <Route exact path="/time-up" component={FinishTime}/>
                    <Route exact path="/wrong-answer" component={GameOver}/>
                    <Route exact path="/finish-game" component={FinishGame}/>
                </Switch>
            </div>
    }

}
export default withRouter(Routes);