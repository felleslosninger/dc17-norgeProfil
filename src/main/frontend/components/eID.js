var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Help from 'material-ui/svg-icons/action/help-outline';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import EidIcon from 'material-ui/svg-icons/action/extension';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

class EID extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
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
        const fontColorStyle = {
            color: 'black'
        };

        const actions = [
            <FlatButton
                label="Lukk"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <Card className="Card">
                <Row className="CardHeader">
                    <Col sm={3} md={3} lg={2} className="Icon">{<EidIcon />}</Col>
                    <Col sm={6} md={6} lg={7}><h4>eID</h4></Col>
                    <Col sm={3} md={3} lg={3}><Help onClick={this.handleOpen}/></Col>
                </Row>
                <Dialog
                    title="Elektronisk ID"
                    actions={actions} modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <List>
                        <ListItem
                            primaryText="MinID"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            leftAvatar={<img src="img/minid.png" className="CardPicture Small"/>}
                            nestedItems={[
                                <ListItem key={1} disabled={true} className="Li Info">
                                    <p className="CustomP">
                                    MinID er en personlig, elektronisk ID som gir tilgang til offentlige tjenester på
                                    mellomhøyt sikkerhetsnivå, nivå 3.
                                    <br/><br/>
                                    Direktoratet for forvaltning og IKT (Difi) er ansvarlig for MinID. MinID kan
                                    bestilles fra det året du fyller 13.
                                    <br/><br/>
                                    For å registrere deg som MinID-bruker trenger du: <br/><br/>
                                    <ul>
                                        <li>fødselsnummer eller D-nummer</li>
                                        <li> mobiltelefonnummer eller e-postadresse</li>
                                        <li>PIN-kodebrev</li>
                                    </ul>
                                    <br/>
                                    Skal du opprette en digital postkasse, må du ha en ID på høyere sikkerhetsnivå
                                    enn MinID. Mer om registrering og innlogging med MinID.
                                    <br/><br/>
                                    <a href="http://eid.difi.no/nn/minid">Mer om registrering og innlogging med
                                        MinID.</a>
                                    </p>
                                </ListItem>

                            ]}
                        />
                        <ListItem
                            primaryText="BankID"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            leftAvatar={<img src="img/bankid.png" className="CardPicture Small"/>}
                            nestedItems={[
                                <ListItem key={1} disabled={true} className="Li Info">
                                    <p className="CustomP">
                                    BankID er en personlig, elektronisk ID som gir tilgang til offentlige tjenester på
                                    høyeste sikkerhetsnivå, nivå 4. <br/><br/>
                                    BankID blir levert av banken din og kan bli gitt til personar som har fylt 15 år.
                                    Men de enkelte bankene opererer med egne aldersgrenser. <br/><br/>
                                    For å bestille BankID må du kontakte banken din. Mer om aktivering og innlogging med
                                    BankID.<br/><br/>
                                    <a href="http://eid.difi.no/nn/bankid">Mer om aktivering og innlogging med
                                        BankID.</a>
                                    </p>
                                </ListItem>
                            ]}
                        />
                        <ListItem
                            primaryText="BankID på mobil"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            leftAvatar={<img src="img/bankid_pa_mobil.png" className="CardPicture Small"/>}
                            nestedItems={[
                                <ListItem key={1} disabled={true} className="Li Info">
                                    <p className="CustomP">
                                    BankID på mobil er en personlig, elektronisk ID som gir tilgang til offentlige
                                    tjenester på høyeste sikkerhetsnivå, nivå 4.<br/><br/>
                                    For å kunne ta i bruk BankID på mobil må du ha en nettbankavtale med BankID og en
                                    kodebrikke.<br/><br/>
                                    Du kan bare aktivere BankID på mobil fra banken som gav deg BankID. <br/><br/>
                                    For å aktivere BankID på mobil må du logge inn i nettbanken din.<br/><br/>
                                    <a href="http://eid.difi.no/nn/bankid-pa-mobil">Mer om aktivering og innlogging med
                                        BankID på mobil</a>
                                    </p>
                                </ListItem>
                            ]}
                        />
                        <ListItem
                            primaryText="Buypass ID"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            leftAvatar={<img src="img/buypass.png" className="CardPicture Small"/>}
                            nestedItems={[
                                <ListItem key={1} disabled={true} className="Li Info">
                                    <p className="CustomP">
                                    Buypass ID er en personlig, elektronisk ID som gir tilgang til offentlige tjenester
                                    på høyeste sikkerhetsnivå, nivå 4.<br/><br/>
                                    Han blir utskrivet av Buypass AS og blir levert som Buypass ID på smartkort og
                                    Buypass ID i mobil.<br/><br/>
                                    Alle som har smartkort fra Buypass, kan ta i bruk Buypass ID i mobil.<br/><br/>
                                    Buypass ID opererer ikke med aldersgrense, men krever legitimering og personlig
                                    underskrift ved utskriving.<br/><br/>
                                    <a href="http://eid.difi.no/nn/buypass">Mer om bestilling og innlogging med Buypass
                                        ID.</a>
                                    </p>
                                </ListItem>
                            ]}
                        />
                        <ListItem
                            primaryText="Commfides"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            leftAvatar={<img src="img/commfides.png" className="CardPicture Small"/>}
                            nestedItems={[
                                <ListItem key={1} disabled={true} className="Li Info">
                                    <p className="CustomP">
                                    Commfides er en personlig, elektronisk ID som gir tilgang til offentlige tjenester
                                    på høyeste sikkerheitsnivå, nivå 4.<br/><br/>
                                    Commfides blir levert av Commfides Norge AS som elektronisk ID på en sikker
                                    USB-pinne. Commfides opererer ikke med aldersgrense,
                                    men krever legitimering og personlige underskrift ved utskriving. <br/><br/>
                                    For å bestille Commfides e-ID må du kontakte Commfides.<br/><br/>
                                    <a href="http://eid.difi.no/nn/commfides">Mer om bestilling og innlogging med
                                        Commfides.</a>
                                    </p>
                                </ListItem>
                            ]}
                        />
                    </List>
                </Dialog>
                <hr className="HLine"/>
                <CardText>
                    <div className="DivoverMeny">
                        <Menu className="Meny" desktop={true}>
                            <h5>Tjenester i bruk</h5>
                            <MenuItem style={fontColorStyle} className="MenuItem" primaryText="MinID" leftIcon={<CheckIcon/>}
                                      disabled={true}/>
                            <MenuItem style={fontColorStyle} className="MenuItem" primaryText="BankID på mobil" leftIcon={<CheckIcon/>}
                                      disabled={true}/>
                            <Divider />
                            <h5>Andre tjenester</h5>
                            <MenuItem style={fontColorStyle} className="MenuItem" primaryText="BankID" leftIcon={< CancelIcon/>}
                                      disabled={true}/>
                            <MenuItem style={fontColorStyle} className="MenuItem"  primaryText="Buypass ID" leftIcon={<CancelIcon />}
                                      disabled={true}/>

                        </Menu>
                    </div>
                </CardText>
            </Card>
        );
    }
}


module.exports = EID;