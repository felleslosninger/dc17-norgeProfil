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
// var ToolBar = require('./components/ToolBar.js');


const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                {/*<ToolBar/>*/}
                <Row>
                    <Col sm={6} md={3} ><ContactInfo/></Col>
                    <Col sm={6} md={3} ><Mail/></Col>
                    <Col sm={6} md={3} ><EID/></Col>
                    <Col sm={6} md={3} ><Reservation/></Col>
                </Row>
            </div>
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
