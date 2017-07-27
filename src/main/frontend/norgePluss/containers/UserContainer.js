import React, {Component} from 'react';
import Username from '../components/Username'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {login,logout} from '../../utilities/actions';
import {connect} from "react-redux";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: 'rgb(10, 79, 117)',
        alternateTextColor: 'rgb(246, 170, 111)',
    }
});

class UserContainer extends Component {

    constructor(props){
        super(props);

    }

    render() {
        if(this.props.isLoggedIn){
            return(
                <MuiThemeProvider muiTheme = {muiTheme}>
                    <div id="pageheader">
                        <h1><Username/></h1>
                    </div>
                </MuiThemeProvider>
            );
        }
        return(
            <div>

            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);