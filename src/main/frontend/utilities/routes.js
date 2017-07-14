"use strict";
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import HealthContainer from '../containers/HealthContainer';
import {Provider} from "react-redux";
import EnsureLoggedInContainer from'../containers/EnsureLoggedInContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#2f6888',
        alternateTextColor: '#f6aa6f',
    },
    appBar: {
        textColor: '#f6aa6f',
    },
    raisedButton: {
        color: '#c3dfdf',
        textColor: '#424242',
        primaryColor: '#c3dfdf',
        primaryTextColor: '#424242',
        secondaryColor: '#c3dfdf',
        secondaryTextColor: '#424242',
    },
});

const Routes = ({store}) => (
    <Provider store = {store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <HashRouter>
                <Switch>
                    <EnsureLoggedInContainer>
                        <Switch>

                            <Route path='/health' component={HealthContainer}/>
                            <Route path='/' component={AppContainer}/>

                        </Switch>

                    </EnsureLoggedInContainer>
                </Switch>
            </HashRouter>
        </MuiThemeProvider>
    </Provider>
);

export default Routes;
