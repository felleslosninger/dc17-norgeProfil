import React, {Component} from 'react';
import InfoBox from "../components/InfoBox";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {connect} from "react-redux";

const boxInfo = (store, id, title, subTitle, description, url, isLoggedIn) => {
    return(
        <InfoBox store = {store} key = {id} title = {title}  subTitle =  {subTitle} description = {description} url = {url} isLoggedIn = {isLoggedIn}/>
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
        console.log("plussContainer ", this.props.isLoggedIn)
        infoList.push(boxInfo(this.props.store, 1,"Bytte fastlege - Min fastlege", "Helfo", "Her kan du finne fastlegen din, få oversikt over ledige fastleger og bytte fastlege. Du kan bytte fastlege to ganger per kalenderår. Du kan også sette deg på venteliste dersom legen du ønsker ikke er ledig.", "http://localhost:8080/data/fastlege", this.props.isLoggedIn));
        infoList.push(
            boxInfo(this.props.store,
            2,"Din side - dine kjøretøy, vognkort, førerkort, salgsmelding", "Statens vegvesen", "Logg inn til Din side for å sjekke informasjonen om kjøretøy du eier, bestille nytt vognkort, søke om førerkort, bestille time for oppkjøring, se bevis for rett til øvelseskjøring, levere salgsmelding på nett med mer.",
                "http://localhost:8080/data/forerkort",
                this.props.isLoggedIn));

        return(infoList);
    }


    constructor(props) {
        super(props);
        this.state = {
            norgeno: '',
            infoList: this.createInfoList()
        }
    }

    componentWillMount() {
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



const mapStateToProps = state => {
    let {app:{isLoggedIn}} = state;

    return{
        isLoggedIn: isLoggedIn,
    }
};


export default connect(mapStateToProps) (NorgePlussContainer);