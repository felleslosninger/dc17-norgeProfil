var React = require('react');
var ReactDOM = require('react-dom');

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var ContactInfo = require('./components/ContactInfoCard.js');

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <ContactInfo/>
    </MuiThemeProvider>
);

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#3F51B5',
    },
});

ReactDOM.render(<App/>, document.getElementById('react'));
