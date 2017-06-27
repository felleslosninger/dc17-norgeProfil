import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContactInfo from '../components/ContactInfo';
import addContactInfo from '../utilities/actions';
import configureStore from "../configureStore";


const store = configureStore();

class ContactInfoContainer extends Component {

    componentDidMount() {
    //  Fetch data from API
    }

    render() {
        return (
            <div>
                <ContactInfo
                    onSave={this.props.saveContactInfo}
                    savedEmail={this.props.email}
                    savedPhone={this.props.phone}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {

    const onSave = saveContactInfo;

    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveContactInfo: (contactInfo) => dispatch(addContactInfo(contactInfo)),
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
    document.getElementById('allActivities')
);