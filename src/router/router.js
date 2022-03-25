import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import LoginView from '../view/loginView'
import HomeView from '../view/homeView'
import BookView from '../view/bookView'
import OrderView from '../view/orderView'
import BookEditorView from '../view/bookEditorView';
import RegisterView from '../view/registerView';
import CartsView from '../view/cartsView';

export const history = require('history').createBrowserHistory()

export default class BasicRouter extends React.Component {
  constructor (props) {
    super(props)

    history.listen((location, action) => {
      console.log(location, action)
    })
  }

  render () {
    return <Router history={history}>
      <Switch>
        <Route exact path="/home" component={HomeView} />
        <Route exact path="/login" component={LoginView}/>
        <Route exact path="/register" component={RegisterView}/>
        <Route exact path="/book" component={BookView}/>
        <Route exact path="/editor" component={BookEditorView}/>
        <Route exact path="/orders" component={OrderView}/>
        <Route exact path="/cart" component={CartsView}/>
        <Route exact path="/" component={HomeView}/>
        <Redirect from="/*" to="/home"/>
      </Switch>
    </Router>
  }
}
