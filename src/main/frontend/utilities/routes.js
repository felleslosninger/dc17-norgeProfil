"use strict";
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import NavBarContainer from '../containers/NavBarContainer';
import Traffic from '../containers/Traffic';
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
                <div>
                    <NavBarContainer/>
                    <Switch>
                        <EnsureLoggedInContainer>
                            <Switch>
                                <Route path="/traffic" component={Traffic}/>
                                <Route path='/' component={AppContainer}/>
                            </Switch>
                        </EnsureLoggedInContainer>
                        {/*<Route path='/login' component={LoginContainer} />*/}
                    </Switch>
                </div>
            </HashRouter>
        </MuiThemeProvider>
    </Provider>
);

export default Routes;
