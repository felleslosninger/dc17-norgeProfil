import React, {Component} from 'react';

class InfoBox extends Component {

    render(){
        return(
            <div class="one-col difi-search-result-service difi-search-result-item">


                <h2 class="views-field-service-title">
                    <span class="field-content">
                        <a href="https://helsenorge.no/min-helse/Bytte-fastlege?">Bytte fastlege - Min fastlege</a>
                    </span>
                </h2>
                <div class="views-field-owner-title">
                    <div class="field-content">Helfo</div>
                </div>
                <div class="views-field-ikon">
                    <span class="field-content">
                        <span class="icon">
                            <div id="fastlegepluss"></div>
                            <a href="/nb/livssituasjon/flytte" title="Gå til livssituasjon 'Flytte'">
                                <span class="icon-life-move"></span>
                            </a>
                        </span>
                    </span>
                </div>
                <div class="views-field-description">
                    <span class="field-content">Her kan du finne fastlegen din, få oversikt over ledige fastleger og bytte fastlege. Du kan bytte fastlege to ganger per kalenderår. Du kan også sette deg på venteliste dersom legen du ønsker ikke er ledig.</span>
                </div>
            </div>
        );
    }
}