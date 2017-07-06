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

        const listStyle = {
            paddingTop: '0px'
        };

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

        const activeList = [];
        let checkActive = () => {
            for (let i = 0; i < this.props.userActiveEid.length; i++) {
                activeList.push(
                    <MenuItem style={fontColorStyle}
                              key={i+1}
                              primaryText={this.props.userActiveEid[i]}
                              leftIcon={<CheckIcon/>}
                              disabled={true}/>
                );
            }
        };

        const nonActiveList = [];
        let checkNonActive = () => {
            for (let i = 0; i < this.props.userNonActiveEid.length; i++) {
                nonActiveList.push(
                    <MenuItem style={fontColorStyle}
                              key={i+5}
                              primaryText={this.props.userNonActiveEid[i]}
                              leftIcon={<CancelIcon/>}
                              disabled={true}/>
                );
            }
        };

        return (
            <Card className="Card">
                <Row className="CardHeader">
                    <Col md={1} className="Icon">{<EidIcon />}</Col>
                    <Col md={10}><h4>eID</h4></Col>
                    <Col mdOffset={10}><Help onClick={this.handleOpen}/></Col>
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
                            leftAvatar={<img src="img/minid.png" width={40}/>}
                            nestedItems={[

                                <ListItem key={1} disabled={true} className="EidInfo">
                                    MinID er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på
                                    mellomhøgt sikkerheitsnivå, nivå 3.
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
                                </ListItem>

                            ]}
                        />
                        <ListItem
                            primaryText="BankID"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            leftAvatar={<img src="img/bankid.png" width={40}/>}
                            nestedItems={[

                                <ListItem key={1} disabled={true} className="EidInfo">
                                    BankID er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på
                                    høgaste sikkerheitsnivå, nivå 4.
                                    <br/><br/>
                                    BankID blir levert av banken din og kan bli gitt til personar som har fylt 15 år.
                                    Men de enkelte bankene opererer med egne aldersgrenser. <br/><br/>
                                    For å bestille BankID må du kontakte banken din. Mer om aktivering og innlogging med
                                    BankID.<br/><br/>
                                    <a href="http://eid.difi.no/nn/bankid">Mer om aktivering og innlogging med
                                        BankID.</a>

                                </ListItem>
                            ]}
                        />
                        <ListItem
                            primaryText="BankID på mobil"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            leftAvatar={<img src="img/bankid_pa_mobil.png" width={40}/>}
                            nestedItems={[

                                <ListItem key={1} disabled={true} className="EidInfo">
                                    BankID på mobil er ein personleg, elektronisk ID som gir tilgang til offentlege
                                    tenester på høgaste sikkerheitsnivå, nivå 4.<br/><br/>
                                    For å kunne ta i bruk BankID på mobil må du ha ein nettbankavtale med BankID og ein
                                    kodebrikke.<br/><br/>
                                    Du kan bare aktivere BankID på mobil fra banken som gav deg BankID. <br/><br/>
                                    For å aktivere BankID på mobil må du logge inn i nettbanken din.<br/><br/>
                                    <a href="http://eid.difi.no/nn/bankid-pa-mobil">Mer om aktivering og innlogging med
                                        BankID på mobil</a>
                                </ListItem>
                            ]}
                        />
                        <ListItem
                            primaryText="Buypass ID"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            leftAvatar={<img src="img/buypass.png" width={40}/>}
                            nestedItems={[

                                <ListItem key={1} disabled={true} className="EidInfo">
                                    Buypass ID er ein personleg, elektronisk ID som gir tilgang til offentlege tenester
                                    på høgaste sikkerheitsnivå, nivå 4.<br/><br/>
                                    Han blir utskriven av Buypass AS og blir levert som Buypass ID på smartkort og
                                    Buypass ID i mobil.<br/><br/>
                                    Alle som har smartkort fra Buypass, kan ta i bruk Buypass ID i mobil.<br/><br/>
                                    Buypass ID opererer ikke med aldersgrense, men krever legitimering og personlig
                                    underskrift ved utskriving.<br/><br/>
                                    <a href="http://eid.difi.no/nn/buypass">Mer om bestilling og innlogging med Buypass
                                        ID.</a>
                                </ListItem>
                            ]}
                        />
                        <ListItem
                            primaryText="Commfides"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            leftAvatar={<img src="img/commfides.png" width={40}/>}
                            nestedItems={[

                                <ListItem key={1} disabled={true} className="EidInfo">
                                    Commfides er ein personleg, elektronisk ID som gir tilgang til offentlege tenester
                                    på høgaste sikkerheitsnivå, nivå 4.<br/><br/>
                                    Commfides blir levert av Commfides Norge AS som elektronisk ID på ein sikker
                                    USB-pinne. Commfides opererer ikkje med aldersgrense,
                                    men krev legitimering og personleg underskrift ved utskriving. <br/><br/>
                                    For å bestille Commfides e-ID må du kontakte Commfides.<br/><br/>
                                    <a href="http://eid.difi.no/nn/commfides">Mer om bestilling og innlogging med
                                        Commfides.</a>
                                </ListItem>
                            ]}
                        />
                    </List>
                </Dialog>
                <hr className="Headline"/>
                <CardText style={listStyle}>
                    <div className="DivoverMeny">
                        <Menu style={listStyle} className="meny" desktop={true}>
                            <div>Tjenester i bruk</div>
                            {activeList}
                            {checkActive()}
                            <Divider />
                            <div>Andre tjenester</div>
                            {nonActiveList}
                            {checkNonActive()}
                        </Menu>
                    </div>
                </CardText>
            </Card>
        );
    }
}


EID.propTypes = {
    userActiveEid: React.PropTypes.array.isRequired,
    userNonActiveEid: React.PropTypes.array.isRequired,
};


export default EID;