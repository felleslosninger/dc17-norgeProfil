import React, {Component} from 'react';
import {connect} from "react-redux";
import {login,logout} from '../../utilities/actions';

class TestContainer extends Component {
    render(){
        console.log("test2",this.props);
        return(
            <div>
                <h1>Test2</h1>
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