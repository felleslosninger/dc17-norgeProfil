"use strict";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppContainer from "./AppContainer.js";
import NavigationBar from '../components/NavigationBar.js';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import configureStore from "../utilities/store";
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#3F51B5',
    },
});

const Bar = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <NavigationBar/>
        </MuiThemeProvider>
    );
};

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            isAuth: false
        };
        this.authenticate = this.authenticate.bind(this);
        this.test = this.test.bind(this);
    }


    test() {
        this.setState({
            isAuth: true
        });
    }

    componentWillMount() {
        this.authenticate();
    }

    authenticate() {
        axios.get('/user')
            .then((response) => {
                if (response.data == "") {
                    this.setState({
                        isAuth: false
                    });
                } else {
                    if (response.data.authenticated == true) {
                        this.setState({
                            isAuth: true
                        });
                    }
                    else {
                        this.setState({
                            isAuth: false
                        });
                    }
                }
            });
    }

    render() {
        if (!this.state.isAuth) {
            return (
                <MuiThemeProvider>
                    <Provider store={store}>
                        <RaisedButton href="/login/idporten" label="Logg inn med Idporten" secondary={true} className="LogInBtn"/>
                    </Provider>

                </MuiThemeProvider>
            )

        } else {
            return (
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Provider store={store}>
                        <AppContainer />
                    </Provider>
                </MuiThemeProvider>
            );
        }
    }

}

injectTapEventPlugin();

ReactDOM.render(
    <Login/>,
    document.getElementById('app')
);


ReactDOM.render(<Bar/>, document.getElementById('navbar'));

