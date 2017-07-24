import React, {Component} from 'react';
import Login from '../components/Login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: 'rgb(10, 79, 117)',
        alternateTextColor: 'rgb(246, 170, 111)',
    }
});


class HeaderContainer extends Component {

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
                    <div id="login">
                        <Login/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HeaderContainer;