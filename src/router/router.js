import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import LoginView from '../view/loginView';

export const history = require('history').createBrowserHistory();

export default class BasicRouter extends React.Component{
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            console.log(location,action);
        });
    }

    render() {
        return <Router history={history}>
            <Switch>
                {/*<Route exact path="/home" component={HomeView} />*/}
                <Route exact path="/login" component={LoginView}/>
                {/*<Route exact path="/register" component={RegisterView}/>*/}
                {/*<Route exact path="/menu" component={MenuView}/>*/}
                {/*<Route exact path="/history" component={HistoryView}/>*/}
                {/*<Route exact path="/excel" component={ExcelView}/>*/}
                <Route exact path="/" component={LoginView}/>
                <Redirect from="/*" to="/login"/>
            </Switch>
        </Router>;
    }
}