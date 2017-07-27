import React, {Component} from 'react';
import Login from '../components/Login'
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

class HeaderContainer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <MuiThemeProvider muiTheme = {muiTheme}>
                <div className="header-body">
                    <div className="branding norgeno3">
                        <div className="logo">
                            <a href="https://www.norge.no/nb"><h1><span>Norge.no</span></h1></a>
                        </div>
                        <div className="slogan">
                            <span></span>
                        </div>
                    </div>
                    <div className="tools">
                        <a className="menu">
                            Meny
                        </a>
                        <section className="box block-locale">
                            <div className="heading">
                                <h2>Språk</h2>
                            </div>
                            <div className="body">
                                <ul className="language-switcher-locale-url">
                                    <li className="523 first">
                                        <a href="https://www.norge.no/nb/om-noregno" className="language-link not-active">Om Norge.no</a>
                                    </li>
                                    <li className="nb active">
                                        <a href="sertifikat" className="language-link active">Bokmål</a>
                                    </li>
                                    <li className="nn">
                                        <a href="https://www.norge.no/nn/search/site/sertifikat" className="language-link">Nynorsk</a>
                                    </li>
                                    <li className="en last">
                                        <a href="https://www.norge.no/en/search/site/sertifikat" className="language-link">English</a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div id="profileUsername">

                    </div>
                    <div id="login">
                        <Login isLoggedIn = {this.props.isLoggedIn} login = {this.props.login} logout = {this.props.logout}/>
                    </div>
                </div>
            </MuiThemeProvider>
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

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);
