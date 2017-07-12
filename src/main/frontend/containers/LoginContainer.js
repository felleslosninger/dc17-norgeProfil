"use strict";
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Login = () => {

    return(
        <div>
            <RaisedButton href="/login/idporten" label="Logg inn med Idporten" secondary={true} className="LogInBtn"/>
        </div>
    );
};

export default Login;

