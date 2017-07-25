import React, {Component} from 'react';
import {connect} from "react-redux";
import FlatButton from 'material-ui/FlatButton';
import AuthCheck from '../../components/AutchCheck';
import {login,logout} from '../../utilities/actions';
import injectTapEventPlugin from 'react-tap-event-plugin';


const styling = {
    marginLeft: '19em',
    marginTop: '1em',
};


class Login extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <AuthCheck isLoggedIn= {this.props.isLoggedIn}
                           login = {this.props.login}
                           logout = {this.props.logout}
                />
                <FlatButton backgroundColor="#c3dfdf" label="Logg inn" style={styling} href="/login/idporten"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let {app:{isLoggedIn}} = state;

    return{
        isLoggedIn: isLoggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
}

injectTapEventPlugin();

export default connect(mapStateToProps,mapDispatchToProps)(Login);