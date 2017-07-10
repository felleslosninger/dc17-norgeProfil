"use strict";
import React, { Component } from 'react';
// import Router from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
// import LoginContainer from '../containers/LoginContainer'
import AppContainer from '../containers/AppContainer';

class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Route path='/' component={AppContainer} />
                {/*<Route path='/login' component={LoginContainer} />*/}
            </HashRouter>
        );
    }
}


export default Routes;
