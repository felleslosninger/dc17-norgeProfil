import React, {Component} from 'react';
import GamificationBox from '../components/GamificationBox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Provider} from "react-redux";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: 'rgb(10, 79, 117)',
        alternateTextColor: 'rgb(246, 170, 111)',
    }
});

class GamificationContainer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <Provider store = {this.props.store}>
                <MuiThemeProvider muiTheme = {muiTheme}>
                    <div>
                        <GamificationBox/>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default GamificationContainer;