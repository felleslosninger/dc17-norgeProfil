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
            reservation: 'Reserver'
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setReservation = this.setReservation.bind(this);
        this.removeReservation = this.removeReservation.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    setReservation(){
        this.setState({reservation: 'Reservation'});
    }

    removeReservation() {
        this.setState({reservation: 'Reserved'});
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    handleChange() {
        if (this.state.reservation == 'Reservation') {
            this.setState({reservation: 'Reserved'});
        } else {
            this.setState({reservation: 'Reserved'});
        }
        this.setState({open: false});
    }

    render() {

        const actions = [
            <FlatButton
                label="Lukk"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        const reservationCard = function (reservation){
            return (
                <Card className="Card">
                    <Row className="CardHeader">
                        <Col md={1} className="Icon">{<NotificationsOff />}</Col>
                        <Col md={10}><h4>Reservasjon</h4></Col>
                        <Col mdOffset={10}><Help onClick={reservation.handleOpen}/></Col>
                    </Row>
                    <Dialog
                        title="Brev fra stat og kommune"
                        actions={actions} modal={false}
                        open={reservation.state.open}
                        onRequestClose={reservation.handleClose}>
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
                                onClick={reservation.setReservation}
                                //defaultToggled={false}
                            />
                        </div>
                    </CardText>
                </Card>)

        };

        const reservedCard = function(reservation){

            return (
                <Card className="Card">
                    <Row className="CardHeader">
                        <Col lg={1} className="Icon">{<NotificationsOff />}</Col>
                        <Col lg={10}><h4>Reservasjon</h4></Col>
                        <Col lgOffset={10}><Help onClick={reservation.handleOpen}/></Col>
                    </Row>
                    <Dialog
                        title="Brev fra stat og kommune"
                        actions={actions} modal={false}
                        open={reservation.state.open}
                        onRequestClose={reservation.handleClose}>
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
                        Du har nå reservert deg mot kommunikasjon på nett fra det offentlige.
                        Du vil fra nå motta vedtak og andre brev med innhold som er viktig for deg kun på papir.
                        <br/><br/>
                        Ved å fjerne reservasjon kan stat og kommune sende deg vedtak og andre viktige brev digitalt.
                        <a href="http://eid.difi.no/nb/reserver-deg-mot-kommunikasjon-pa-nett"> Les mer</a>
                        <br/><br/>
                        <div className="ReservationBtn">
                            <RaisedButton
                                label="Opphev reservasjon"
                                onClick={reservation.removeReservation}

                            />
                        </div>
                    </CardText>
                </Card>
            )
        };

        let reservation = this.state.reservation;
        if (reservation == 'Reservation') {
            return ( reservedCard(this, reservation) )
        } else {
            return ( reservationCard(this) )
        }

    }
}


export default Reservation;
