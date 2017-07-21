import React, {Component} from 'react';
import axios from "axios";
import InfoBox from "../components/InfoBox";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const boxInfo = (id, title, subTitle, description) => {
    return(
        <InfoBox key = {id} title = {title}  subTitle =  {subTitle} description = {description} />
    );
}

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: 'rgb(10, 79, 117)',
        alternateTextColor: 'rgb(246, 170, 111)',
    }
});

class NorgePlussContainer extends Component {

    createInfoList(){
        let infoList = [];
        infoList.push(boxInfo(1,"Bytte fastlege - Min fastlege", "Helfo", "Her kan du finne fastlegen din, få oversikt over ledige fastleger og bytte fastlege. Du kan bytte fastlege to ganger per kalenderår. Du kan også sette deg på venteliste dersom legen du ønsker ikke er ledig."))

        return(infoList);
    }


    constructor(props) {
        super(props);
        this.state = {
            norgeno: '',
            infoList: this.createInfoList()
        }
    }

    fetchFromServer() {
        axios.get("http://localhost:8080/data/fastlege").then( (response) => {
            console.log(response);
            this.setState({norgeno: response.data})
        })
    }

    componentWillMount() {
        this.fetchFromServer();
        this.setState({
            norgeno: ''
        });
    }

    render() {
        return (
          <MuiThemeProvider muiTheme = {muiTheme}>
              <div>
                  {this.state.infoList}
              </div>
          </MuiThemeProvider>
        );
    }
}

export default NorgePlussContainer;