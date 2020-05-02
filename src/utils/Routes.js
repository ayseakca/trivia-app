import React, {Component} from 'react';
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';
import Welcome from '../Component/Welcome';
import Quiz from '../Component/Quiz';
import FinishTime from '../Component/FinishTime';

class Routes extends Component {

    render() {
        return <div className="layout-content">
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/start-quiz" component={Quiz}/>
                    <Route exact path="/time-up" component={FinishTime}/>

                </Switch>
            </div>
    }

}
export default withRouter(Routes);