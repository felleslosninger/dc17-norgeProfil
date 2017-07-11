"use strict";
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
//import LoginContainer from '../containers/LoginContainer'
import AppContainer from '../containers/AppContainer';
import TestContainer from '../containers/TestContainer';
import {Provider} from "react-redux";
import EnsureLoggedInContainer from'../containers/EnsureLoggedInContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#3F51B5',
    },
});

const Routes = ({store}) => (
    <Provider store = {store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <HashRouter>
                <Switch>
                    <Route path='/Dashboard' component={TestContainer}/>
                    <EnsureLoggedInContainer>
                        <Route path='/' component={AppContainer}/>
                    </EnsureLoggedInContainer>
                    {/*<Route path='/login' component={LoginContainer} />*/}
                </Switch>
            </HashRouter>
        </MuiThemeProvider>
    </Provider>
);

export default Routes;
