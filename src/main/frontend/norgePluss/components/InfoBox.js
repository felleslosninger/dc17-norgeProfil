import React, {Component} from 'react';
import PlusButton from '../components/PlusButton'
class InfoBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            plusClicked: false,
            descClicked:false;
        }
    }

    togglePlus(){
        
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
                    <PlusButton text = "Beskrivelse"/>
                    <PlusButton text = "Pluss"/>
                </div>
                <div className="views-field-description">
                    <span className="field-content">{this.props.description}</span>
                </div>

            </div>
        );
    }
}

export default InfoBox;