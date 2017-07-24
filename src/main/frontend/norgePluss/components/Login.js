import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

const styling = {
    marginLeft: '19em',
    marginTop: '1em',
};


class Login extends Component {

    render(){
        return(
            <FlatButton backgroundColor="#c3dfdf" label="Logg inn" style={styling}/>
        );
    }
}

export default Login;