import React, {Component} from 'react';
import {Provider} from "react-redux";
import TestComp from '../components/TestComp';
import configureStore from "../utilities/store";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {connect} from "react-redux";
import {login,logout} from '../utilities/actions';


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#3F51B5',
    },
});

class TestContainer extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <TestComp isLoggedIn = {this.props.isLoggedIn}
                          login = {this.props.login}
                          logout = {this.props.logout}/>
            </MuiThemeProvider>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
}

const mapStateToProps = state => {
    let {app:{isLoggedIn}} = state;

    return{
        isLoggedIn: isLoggedIn,
    }
}

TestContainer = connect(mapStateToProps, mapDispatchToProps)(TestContainer);

export default TestContainer;