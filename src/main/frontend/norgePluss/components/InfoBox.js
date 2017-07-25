import React, {Component} from 'react';
import PlusButton from '../components/PlusButton'
import axios from "axios";
import FlatButton from 'material-ui/FlatButton';
import AuthCheck from "../../components/AutchCheck"


class InfoBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plusClicked: false,
            descClicked: false,
            plussDesc: "",
            hasLoaded: false
        };

        this.togglePlus = this.togglePlus.bind(this);
        this.toggleDesc = this.toggleDesc.bind(this);
        this.fetchFromServer = this.fetchFromServer.bind(this);
    }

    togglePlus() {

        if (!this.state.plusClicked && !this.state.hasLoaded) {
            this.fetchFromServer();
        }

        this.setState({
            plusClicked: !this.state.plusClicked
        });

    }

    toggleDesc() {
        this.setState({
            descClicked: !this.state.descClicked
        });
    }

    fetchFromServer() {
        axios.get(this.props.url).then((response) => {
            this.setState({
                plussDesc: response.data,
                hasLoaded: true
            });
        });
    }


    render() {
        let plusContent = "";
        let infoContent = "";
        if (!this.props.isLoggedIn && this.state.plusClicked) {
            plusContent = <div className="views-field-description">
                            <span className="field-content"><FlatButton backgroundColor="#c3dfdf" label="Logg inn" href="/login/idporten"/>
                            </span>
                        </div>;

        } else {

            if (this.state.plusClicked) {
                if (this.state.hasLoaded) {
                    plusContent = <div className="views-field-description"><span className="field-content"
                                                                                 dangerouslySetInnerHTML={{__html: this.state.plussDesc}}></span>
                    </div>;
                }
                else {
                    plusContent = <div className="views-field-description"><span className="field-content"><div
                        className="loader">Loading...</div></span>
                    </div>;
                }
            } else {
                plusContent = "";
            }
        }


        if (this.state.descClicked) {
            infoContent =
                <div className="views-field-description"><span className="field-content">{this.props.description}</span>
                </div>;
        } else {
            infoContent = "";

        }

        return (
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
                    <PlusButton text="Beskrivelse" toggle={this.toggleDesc} isClicked={this.state.descClicked}/>
                    <PlusButton text="Pluss" toggle={this.togglePlus} isClicked={this.state.plusClicked}/>
                </div>
                {infoContent}
                {plusContent}
            </div>
        );
    }
}

export default InfoBox;