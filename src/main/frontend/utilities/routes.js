"use strict";
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
// import LoginContainer from '../containers/LoginContainer'
import AppContainer from '../containers/AppContainer';
import TestContainer from '../containers/TestContainer';
import {Provider} from "react-redux";
import EnsureLoggedInContainer from'../containers/EnsureLoggedInContainer';
const Routes = ({store}) => (
    <Provider store = {store}>
        <HashRouter>
            <EnsureLoggedInContainer>
                <Route path='/' component={TestContainer} />
            </EnsureLoggedInContainer>
            {/*<Route path='/login' component={LoginContainer} />*/}
        </HashRouter>
    </Provider>
);



export default Routes;
