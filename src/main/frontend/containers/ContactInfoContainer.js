var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContactInfoCard from '../components/ContactInfoCard';
import { saveContactEmail, saveContactPhone, saveButtonClicked } from '../utilities/actions';
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
                    handleSave={this.props.saveContactButton}
                    savedEmail={this.props.activeContactEmail}
                    savedPhone={this.props.activeContactPhone}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    let {activeContactEmail, activeContactPhone} = state; // Make activeContactEmail and activeContactPhone from state become variables

    return {
        activeContactPhone: activeContactPhone,
        activeContactEmail: activeContactEmail
    }

};

const mapDispatchToProps = dispatch => {
    return {
        activeContactEmail: (contactEmail) => dispatch(saveContactEmail(contactEmail)),
        activeContactPhone: (contactPhone) => dispatch(saveContactPhone(contactPhone)),
        saveContactButton: () => dispatch(saveButtonClicked()),
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