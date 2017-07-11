"use strict";
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationBar from '../components/NavigationBar.js';


const Login = () => {

    return(
        <div>
            <NavigationBar/>
            <RaisedButton href="/login/idporten" label="Logg inn med Idporten" secondary={true} className="LogInBtn"/>
        </div>
    );
};

export default Login;

