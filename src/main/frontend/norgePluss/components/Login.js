import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux";
import FlatButton from 'material-ui/FlatButton';
import AuthCheck from '../../components/AutchCheck';
import {login,logout} from '../../utilities/actions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import GamificationContainer from '../containers/GamificationContainer'
import configureStore from "../../utilities/store";

const styling = {
    marginLeft: '19em',
    marginTop: '1em',
};

const store =
    configureStore();


class Login extends Component {

    constructor(props){
        super(props)
    }

    render(){

        let loginText = "Logg inn";
        let loginLink = "/login/idporten";

        if(this.props.isLoggedIn) {
            loginText = "Logg ut";
            loginLink = "/logout";

            ReactDOM.render(
                <GamificationContainer store = {store}/>,
                document.getElementById('gamificationBox')
            );
        }

        return(
            <div>
                <AuthCheck isLoggedIn= {this.props.isLoggedIn}
                           login = {this.props.login}
                           logout = {this.props.logout}
                />
                <FlatButton backgroundColor="#c3dfdf" label={loginText} style={styling} href={loginLink}/>
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