"use strict";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavigationBar from '../components/NavigationBar.js';
import AppContainer from 'AppContainer.js';
import axios from "axios";
import configureStore from "../utilities/store";
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();

const mapStateToProps = state => {
    let {info: {activeContactEmail, activeContactPhone}} = state;

    return {
        activeContactEmail: activeContactEmail,
        activeContactPhone: activeContactPhone,
    }


};

const mapDispatchToProps = dispatch => {
    return {
        changeEmail: (contactEmail) => dispatch(saveContactEmail(contactEmail)),
        changePhone: (contactPhone) => dispatch(saveContactPhone(contactPhone)),
    }
};

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

    constructor(){
        super();
        this.state = {
            isAuth: false
        };
        this.authenticate = this.authenticate.bind(this);
        this.test = this.test.bind(this);
    }


    test(){
        this.setState({
            isAuth:true
        });
    }

    componentWillMount(){
        this.authenticate();
    }

    authenticate(){
        axios.get('/user')
            .then((response) => {
                if (response.data == ""){
                    this.setState({
                        isAuth: false
                    });
                }else{
                    if(response.data.authenticated == true){
                        this.setState({
                            isAuth: true
                        });
                    }
                    else{
                        this.setState({
                            isAuth: false
                        });
                    }
                }
            });
    }

    render(){
        if(!this.state.isAuth){
            return (
                <div>
                    DU ER IKKE LOGGET INN DIN TISSEFANT
                    <a href="/login/idporten"> Klikk meg for å logge inn</a>
                </div>
            )

        }else{
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

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

injectTapEventPlugin();

ReactDOM.render(
    <Login/>,
    document.getElementById('app')
);


ReactDOM.render(<Bar/>, document.getElementById('navbar'));