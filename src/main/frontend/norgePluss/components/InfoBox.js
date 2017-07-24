import React, {Component} from 'react';
import PlusButton from '../components/PlusButton'
import axios from "axios";
import RefreshIndicator from 'material-ui/RefreshIndicator';



const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    },
};

const loading = () => {
    return(
        <div style={style.container}>
            <RefreshIndicator
                size={40}
                left={10}
                top={0}
                status="loading"
                style={style.refresh}
            /></div>
    );
}


class InfoBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            plusClicked: false,
            descClicked:false,
            plussDesc: loading(),
            hasLoaded: false
        };

        this.togglePlus = this.togglePlus.bind(this);
        this.toggleDesc = this.toggleDesc.bind(this);
        this.fetchFromServer = this.fetchFromServer.bind(this);
    }

    togglePlus(){
        this.setState({
            plusClicked: !this.state.plusClicked
        });
        if(this.state.plusClicked && !this.state.hasLoaded){
            this.fetchFromServer();
        }
    }

    toggleDesc(){
        this.setState({
            descClicked: !this.state.descClicked
        });
    }

    fetchFromServer() {
        axios.get(this.props.url).then((response) => {
            console.log(response.data);
            this.setState({plussDesc: response.data, hasLoaded:true})
        })
    }


    render(){
        let plusDesc = "";
        let infoDesc = "" ;
        if(this.state.plusClicked){
            plusDesc =  <div className="views-field-description"><span className="field-content"dangerouslySetInnerHTML={{__html: this.state.plussDesc}}></span></div>;

        }else{
            plusDesc =  "";

        }

        if(this.state.descClicked){
            infoDesc =  <div className="views-field-description"><span className="field-content">{this.props.description}</span></div>;

        }else{
            infoDesc = "";

        }

        return(
            <div className="one-col difi-search-result-service difi-search-result-item">


                <h2 className="views-field-service-title">
                    <span className="field-content">
                        <a href="https://helsenorge.no/min-helse/Bytte-fastlege?">{this.props.title}</a>
                    </span>
                </h2>
                <div className="views-field-owner-title">
                    <div className="field-content">{this.props.subTitle}</div>
                </div>
                <div className="buttonContainer">
                    <PlusButton text = "Beskrivelse" toggle = {this.toggleDesc} isClicked = {this.state.descClicked}/>
                    <PlusButton text = "Pluss" toggle = {this.togglePlus} isClicked = {this.state.plusClicked}/>
                </div>
                    {infoDesc}
                    {plusDesc}
            </div>
        );
    }
}

export default InfoBox;