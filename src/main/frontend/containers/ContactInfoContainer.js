import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContactInfo from '../components/ContactInfo';
import { saveContactEmail, saveContactPhone, saveButtonClicked } from '../utilities/actions';
import configureStore from "../utilities/store";


const store = configureStore();

class ContactInfoContainer extends Component {

    componentDidMount() {
    //  Fetch data from API
    }

    render() {
        return (
            <div>
                <ContactInfo
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

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <ContactInfoContainer />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('ContactInfo')
);