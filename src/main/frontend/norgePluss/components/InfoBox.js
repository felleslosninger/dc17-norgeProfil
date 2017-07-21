import React, {Component} from 'react';

class InfoBox extends Component {

    render(){
        return(
            <div className="one-col difi-search-result-service difi-search-result-item">


                <h2 className="views-field-service-title">
                    <span className="field-content">
                        <a href="https://helsenorge.no/min-helse/Bytte-fastlege?">Bytte fastlege - Min fastlege</a>
                    </span>
                </h2>
                <div className="views-field-owner-title">
                    <div className="field-content">Helfo</div>
                </div>
                <div className="views-field-ikon">
                    <span className="field-content">
                        <span className="icon">
                            <div id="fastlegepluss"></div>
                            <a href="/nb/livssituasjon/flytte" title="Gå til livssituasjon 'Flytte'">
                                <span className="icon-life-move"></span>
                            </a>
                        </span>
                    </span>
                </div>
                <div className="views-field-description">
                    <span className="field-content">Her kan du finne fastlegen din, få oversikt over ledige fastleger og bytte fastlege. Du kan bytte fastlege to ganger per kalenderår. Du kan også sette deg på venteliste dersom legen du ønsker ikke er ledig.</span>
                </div>
            </div>
        );
    }
}

export default InfoBox;