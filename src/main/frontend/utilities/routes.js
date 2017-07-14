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
        primary1Color: 'rgb(10, 79, 117)',
        alternateTextColor: 'rgb(246, 170, 111)',
    },
    appBar: {
        textColor: 'rgb(246, 170, 111)',
        padding: '7em'
    },
    raisedButton: {
        color: '#c3dfdf',
        textColor: '#424242',
        primaryColor: '#c3dfdf',
        primaryTextColor: '#424242',
        secondaryColor: '#c3dfdf',
        secondaryTextColor: '#424242',
    },
    flatButton: {
        textColor: '#424242',
        primaryTextColor: '#424242',
        secondaryTextColor: '#424242',
    },
    tabs: {
        backgroundColor: 'rgb(10, 79, 117)'
    },
    inkBar: {
        backgroundColor: 'rgb(246, 170, 111)'
    }
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
