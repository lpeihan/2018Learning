/**
 * Created by yuan on 2018/6/13.
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import { Provider } from 'react-redux';
import store from './store'
import { ConnectedRouter} from 'react-router-redux'

import { Route,Redirect,Switch} from 'react-router-dom'
import createHistory from 'history/createHashHistory'
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
                <Redirect to="/login"/>
            </Switch>
        </ConnectedRouter>
    </Provider>
,document.querySelector('#root'))