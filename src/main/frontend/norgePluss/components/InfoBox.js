import React, {Component} from 'react';
import PlusButton from '../components/PlusButton'
class InfoBox extends Component {

    constructor(props){
        super(props);
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
                <div className="views-field-ikon">
                    <span className="field-content">
                        <span className="icon">
                            <a href="/nb/livssituasjon/flytte" title="Gå til livssituasjon 'Flytte'">
                                <span className="icon-life-move"></span>
                            </a>
                        </span>
                    </span>
                    <PlusButton/>
                </div>
                <div className="views-field-description">
                    <span className="field-content">{this.props.description}</span>
                </div>

            </div>
        );
    }
}

export default InfoBox;