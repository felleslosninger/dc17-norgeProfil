import React, {Component} from 'react';
import PlusButton from '../components/PlusButton'
class InfoBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            plusClicked: false,
            descClicked:false
        }

        this.togglePlus = this.togglePlus.bind(this);
        this.toggleDesc = this.toggleDesc.bind(this);
    }

    togglePlus(){
        this.setState({
            plusClicked: !this.state.plusClicked
        });
    }

    toggleDesc(){
        this.setState({
            descClicked: !this.state.descClicked
        });
    }

    render(){

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
                <div className="views-field-description">
                    <span className="field-content">{this.props.description}</span>
                </div>

            </div>
        );
    }
}

export default InfoBox;