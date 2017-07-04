var React = require('react');
var ReactDOM = require('react-dom');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

var ContactInfo = require('./components/ContactInfo.js');
var EID = require('./components/eID.js');
var Reservation = require('./components/Reservation.js');
var Mail = require('./components/Mail.js');
var Username = require('./components/Username.js');
var Feed = require('./components/Feed.js');
var NavigationBar = require('./components/NavigationBar.js');

var Reserved = require('./components/Reserved.js');

var Gamification = require('./components/Gamification.js');


const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <Username/>
                <Row>
                    <Col sm={6} md={6} lg={3} ><ContactInfo/></Col>
                    <Col sm={6} md={6} lg={3} ><Mail/></Col>
                    <Col sm={6} md={6} lg={3} ><EID/></Col>
                    <Col sm={6} md={6} lg={3} ><Reservation/></Col>
                </Row>
                <Gamification/>
                <div className="page-header"><h3>Aktivitetslogg</h3></div>
                <Feed/>
            </div>
        </MuiThemeProvider>
    );
};

const Bar = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
                <NavigationBar/>
        </MuiThemeProvider>
    );
};

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#3F51B5',
    },
});

injectTapEventPlugin();
ReactDOM.render(<App/>, document.getElementById('react'));
ReactDOM.render(<Bar/>, document.getElementById('navbar'));
