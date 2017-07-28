import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {login,logout} from '../../utilities/actions';
import {connect} from "react-redux";
import AccountIcon from 'material-ui/svg-icons/action/account-circle'


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: 'rgb(10, 79, 117)',
        alternateTextColor: 'rgb(246, 170, 111)',
    }
});


const styling = {
    color: 'white',
};

class ProfileUsernameContainer extends Component {

    constructor(props){
        super(props);

    }

    render() {
        if(this.props.isLoggedIn){
            return(
                <MuiThemeProvider muiTheme = {muiTheme}>
                    <div className="userName">
                        <AccountIcon style={styling}/><a href="/#/">&nbsp; Kari Nordmann</a>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProfileUsernameContainer);