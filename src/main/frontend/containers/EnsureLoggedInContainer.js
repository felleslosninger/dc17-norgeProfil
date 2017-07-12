import React, {Component} from 'react';
import {connect} from "react-redux";
import {login,logout} from '../utilities/actions';
import AuthCheck from '../components/AutchCheck';
import Login from '../containers/LoginContainer';

class EnsureLoggedInContainer extends Component {

    render(){
        console.log(this.props);
        if(!this.props.isLoggedIn){
            return(
                <div>
                    <AuthCheck isLoggedIn= {this.props.isLoggedIn}
                               login = {this.props.login}
                               logout = {this.props.logout}
                    />
                    <Login isLoggedIn = {this.props.isLoggedIn}/>
                </div>
            );
        }
        else{
            return(this.props.children);
        }
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

export default connect(mapStateToProps,mapDispatchToProps)(EnsureLoggedInContainer);
