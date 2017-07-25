import React, {Component} from 'react';
import {connect} from "react-redux";
import {login,logout} from '../../utilities/actions';
import AuthCheck from '../../components/AutchCheck';

class TestContainer extends Component {
    render(){
        console.log("test1",this.props);
        return(
            <div>
                <AuthCheck isLoggedIn= {this.props.isLoggedIn}
                           login = {this.props.login}
                           logout = {this.props.logout}
                />
                <h1>Test1</h1>
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

export default connect(mapStateToProps,mapDispatchToProps)(TestContainer);