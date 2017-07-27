import React, {Component} from 'react';
import Login from '../components/Login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {login,logout} from '../../utilities/actions';
import {connect} from "react-redux";
import ProfileUsername from "../components/ProfileUsername";



const muiTheme = getMuiTheme({
    palette: {
        primary1Color: 'rgb(10, 79, 117)',
        alternateTextColor: 'rgb(246, 170, 111)',
    }
});

class HeaderContainer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <MuiThemeProvider muiTheme = {muiTheme}>
                <Login isLoggedIn = {this.props.isLoggedIn} login = {this.props.login} logout = {this.props.logout}/>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => {
    let {app:{isLoggedIn}} = state;

    return{
        isLoggedIn: isLoggedIn,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);
