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
        primary1Color: '#3F51B5',
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
