var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardText} from 'material-ui/Card';
import NotificationsOff from 'material-ui/svg-icons/social/notifications-off';
import Help from 'material-ui/svg-icons/action/help-outline';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Reservation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };


    render() {

        const actions = [
            <FlatButton
                label="Lukk"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        let reservationCard = '';

        if (this.props.reservation === false) {
            reservationCard = (
                <Card className="Card">
                    <Row className="CardHeader">
                        <Col sm={3} lg={2} className="Icon">{<NotificationsOff />}</Col>
                        <Col sm={6} lg={7}><h4>Reservasjon</h4></Col>
                        <Col sm={3} lg={3}><Help onClick={this.handleOpen}/></Col>
                    </Row>
                    <Dialog
                        title="Brev fra stat og kommune"
                        actions={actions} modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}>
                        <div>
                            Reservasjon mot kommunikasjon på nett innebærer at du vil motta vedtak og
                            andre viktige brev fra det offentlige på papir.
                            <br/><br/>
                            Har du registrert kontaktinformasjon, kan du fremdeles få servicemeldinger og
                            informasjon fra det offentlige, for eksempel et varsel om midlertidig stenging av
                            vann på SMS eller informasjon på e-post eller i den digitale postkassen.
                            <br/><br/>
                            Du kan logge inn på offentlige tjenester via ID-porten selv om du er reservert.
                            <br/><br/>
                            Reservasjonen din kan du enkelt oppheve ved å trykke Opphev reservasjon.
                        </div>
                    </Dialog>
                    <hr className="Headline"/>
                    <CardText className="CardText">
                        Om du reserverer deg mot kommunikasjon på nett vil du motta viktige brev fra det offentlige kun på
                        papir.
                        Stat og kommune kan likevel sende deg annen informasjon på e-post, sms eller som brev digitalt.
                        <a href="http://eid.difi.no/nb/reserver-deg-mot-kommunikasjon-pa-nett"> Les mer</a>
                        <br/><br/>
                        <br/><br/>
                        <div className="ReservationBtn">
                            <RaisedButton
                                label="Reserver"
                                onClick={this.props.onSetReservation}
                            />
                        </div>
                    </CardText>
                </Card>
            )
        } else {
            reservationCard = (
                <Card className="Card">
                    <Row className="CardHeader">
                        <Col sm={3} lg={2} className="Icon">{<NotificationsOff />}</Col>
                        <Col sm={6} lg={7}><h4>Reservasjon</h4></Col>
                        <Col sm={3} lg={3}><Help onClick={this.handleOpen}/></Col>
                    </Row>
                    <Dialog
                        title="Brev fra stat og kommune"
                        actions={actions} modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}>
                        <div>
                            Reservasjon mot kommunikasjon på nett innebærer at du vil motta vedtak og
                            andre viktige brev fra det offentlige på papir.
                            <br/><br/>
                            Har du registrert kontaktinformasjon, kan du fremdeles få servicemeldinger og
                            informasjon fra det offentlige, for eksempel et varsel om midlertidig stenging av
                            vann på SMS eller informasjon på e-post eller i den digitale postkassen.
                            <br/><br/>
                            Du kan logge inn på offentlige tjenester via ID-porten selv om du er reservert.
                            <br/><br/>
                            Reservasjonen din kan du enkelt oppheve ved å trykke Opphev reservasjon.
                        </div>
                    </Dialog>
                    <hr className="HLine"/>
                    <CardText className="CardText">
                        Du har nå reservert deg mot kommunikasjon på nett fra det offentlige.
                        Du vil fra nå motta vedtak og andre brev med innhold som er viktig for deg kun på papir.
                        <br/><br/>
                        Ved å fjerne reservasjon kan stat og kommune sende deg vedtak og andre viktige brev digitalt.
                        <a href="http://eid.difi.no/nb/reserver-deg-mot-kommunikasjon-pa-nett"> Les mer</a>
                        <br/><br/>
                        <div className="ReservationBtn">
                            <RaisedButton
                                label="Opphev reservasjon"
                                onClick={this.props.onRemoveReservation}

                            />
                        </div>
                    </CardText>
                </Card>
            )

        }

        return (
           <div>{reservationCard}</div>
        )

    }
}

Reservation.propTypes = {
    onSetReservation: React.PropTypes.func.isRequired,
    onRemoveReservation: React.PropTypes.func.isRequired,
    reservation: React.PropTypes.bool,
};

export default Reservation;