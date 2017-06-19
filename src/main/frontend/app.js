var React = require('react');
var ReactDOM = require('react-dom');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var ContactInfo = require('./components/ContactInfoCard.js');
var EID = require('./components/eID.js');


const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Grid><Row className="show-grid">
                <Col sm={6} md={4} ><ContactInfo/></Col>
                <Col sm={6} md={4} ><EID/></Col>
            </Row></Grid>
        </MuiThemeProvider>
    );
};

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#3F51B5',
    },
});

ReactDOM.render(<App/>, document.getElementById('react'));
