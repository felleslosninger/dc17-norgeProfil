import React, {Component} from 'react';
import InfoBox from "../components/InfoBox";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {connect} from "react-redux";

const boxInfo = (id, title, subTitle, description, url, isLoggedIn) => {
    return(
        <InfoBox key = {id} title = {title}  subTitle =  {subTitle} description = {description} url = {url} isLoggedIn = {isLoggedIn}/>
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
        infoList.push(boxInfo(1,
            "Bytte fastlege - Min fastlege", "Helfo", "Her kan du finne fastlegen din, få oversikt over ledige fastleger og bytte fastlege. Du kan bytte fastlege to ganger per kalenderår. Du kan også sette deg på venteliste dersom legen du ønsker ikke er ledig.",
            "http://localhost:8080/data/fastlege",
            this.props.isLoggedIn));
        infoList.push(boxInfo(2,
            "Din side - dine kjøretøy, vognkort, førerkort, salgsmelding", "Statens vegvesen", "Logg inn til Din side for å sjekke informasjonen om kjøretøy du eier, bestille nytt vognkort, søke om førerkort, bestille time for oppkjøring, se bevis for rett til øvelseskjøring, levere salgsmelding på nett med mer.",
                "http://localhost:8080/data/forerkort",
                this.props.isLoggedIn));
        infoList.push(boxInfo(3,
            "Melde flytting innenlands", "Skatteetaten", "Flytter du innen Norge, må du melde fra til folkeregisteret innen 8 dager etter at du flyttet. Folkeregisteret er en del av skattekontoret. Er du student, kan du som hovedregel velge om du vil være registrert på studiestedet eller på hjemstedet. Er du pendler, gjelder spesielle regler. Skatteetaten og Lånekassen kan gi mer informasjon.",
            "http://localhost:8080/data/adresse",
            this.props.isLoggedIn));
        return(infoList);
    }


    constructor(props) {
        super(props);
        this.state = {
            norgeno: ''
        }
    }

    componentWillMount() {
        this.setState({
            norgeno: ''
        });
    }

    render() {
        let infoList = this.createInfoList();
        return (
          <MuiThemeProvider muiTheme = {muiTheme}>
              <div>
                  {infoList}
              </div>
          </MuiThemeProvider>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
};

const mapStateToProps = state => {
    let {app:{isLoggedIn}} = state;

    return{
        isLoggedIn: isLoggedIn,
    }
};


export default connect(mapStateToProps,mapDispatchToProps) (NorgePlussContainer);