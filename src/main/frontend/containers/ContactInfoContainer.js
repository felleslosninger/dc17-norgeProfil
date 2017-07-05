var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContactInfoCard from '../components/ContactInfoCard';
import { saveContactEmail, saveContactPhone } from '../utilities/actions';
import configureStore from "../utilities/store";
import injectTapEventPlugin from 'react-tap-event-plugin';


const store = configureStore();

class ContactInfoContainer extends Component {

    componentDidMount() {
    //  Fetch data from API

    }

    render() {
        return (
            <div>
                <ContactInfoCard
                    onSaveEmail={this.props.changeEmail}
                    onSavePhone={this.props.changePhone}
                    savedEmail={this.props.activeContactEmail}
                    savedPhone={this.props.activeContactPhone}
                />
            </div>
        );
    }
}



const mapStateToProps = state => {
    let {info: {activeContactEmail, activeContactPhone}} = state;

    return {
        activeContactEmail: activeContactEmail,
        activeContactPhone: activeContactPhone,
    }


};

const mapDispatchToProps = dispatch => {
    return {
        changeEmail: (contactEmail) => dispatch(saveContactEmail(contactEmail)),
        changePhone: (contactPhone) => dispatch(saveContactPhone(contactPhone)),
    }
};

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#3F51B5',
    },
});

ContactInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ContactInfoContainer);

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Row>
                <Col sm={6} md={3}><ContactInfoContainer /></Col>
            </Row>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('ContactInfo')
);