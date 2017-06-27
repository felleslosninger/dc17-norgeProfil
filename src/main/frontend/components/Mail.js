var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


import {Card, CardHeader, CardText} from 'material-ui/Card';
import Email from 'material-ui/svg-icons/communication/email';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import {List, ListItem} from 'material-ui/List';
import Help from 'material-ui/svg-icons/action/help';
import PostboxIcon from 'material-ui/svg-icons/communication/message';
import Toggle from 'material-ui/Toggle';


class Mail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            postbox: 'E-boks', //add init value either Digipost or E-boks
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setPostbox = this.setPostbox.bind(this);
        this.removePostbox = this.removePostbox.bind(this);
    };

    setPostbox(){
        this.setState({postbox: 'E-boks'});
    }

    removePostbox() {
        this.setState({postbox: ''});
    }

    handleChange() {
        if (this.state.postbox == 'E-boks') {
            this.setState({postbox: 'Digipost'});
        } else {
            this.setState({postbox: 'E-boks'});
        }
        this.setState({open: false});
    }

    saveInfo() {
        console.log("saved");
        console.log("Postbox: ", this.state.postbox);
        this.setState({open: false});
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
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleChange}
            />,
        ];

        const actions2 = [
            <FlatButton
                label="Lukk"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        let img = null;
        if (this.state.postbox == 'E-boks') {
            img = (<img src="https://www.e-boks.com/media/1275/eboks-no-logo-1000x197.png" width={100} height={'auto'} alt="logo til E-boks"/>)
        } else {
            img = (<img src="http://sykeavbruddskassen.no/wp-content/uploads/2015/12/digipost-logo.png" width={100} height={'auto'} alt="logo til digipost"/>)
        }

        var getcardForNewMailUser = function (mail) {
            return (
                <Card className="Card">
                    <Row className="CardHeader">
                        <Col md={1} className="Icon">{<Email />}</Col>
                        <Col md={10}><h4>Digital postkasse</h4></Col>
                        <Col mdOffset={10}><Help onClick={mail.handleOpen}/></Col>
                    </Row>
                    <Dialog
                        title="Spørsmål og svar"
                        actions={actions2} modal={false}
                        open={mail.state.open}
                        onRequestClose={mail.handleClose}
                    >
                        <List>
                            <ListItem
                                primaryText="Kva er ein digital postkasse?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="info">
                                        Ein digital postkasse er ei sikker løysing for å få og oppbevare viktig post
                                        digitalt, slik som brev med vedtak, helseopplysningar eller annan sensitiv
                                        informasjon. Det offentlege kan ikkje bruke vanlig e-post til å sende slik
                                        informasjon. Skal du kunne motta viktige brev frå det offentlege digitalt,
                                        må du ha digital postkasse.

                                        Du får ikkje reklame i den digitale postkassen din. Men bedrifter som du har
                                        eit kundeforhold til, som til dømes banken eller forsikringsselskapet ditt,
                                        kan sende deg meldingar om ulike tilbod dersom du har akseptert dette.
                                    </ListItem>
                                ]}
                            />
                            <ListItem
                                primaryText="Er digital postkasse det same som E-post?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="info">
                                        Nei, ein digital postkasse er sikrare enn e-post fordi både avsendar og
                                        mottakar må stadfeste identiteten sin.Post som det offentlege sender til
                                        deg i den digitale postkassen din, blir sendt kryptert, som skjult tekst.
                                        For å opne og lese posten i den digitale postkassen må du legitimere deg
                                        gjennom ID-porten.Det er berre du og dei du har gitt løyve til, som kan
                                        lese posten din frå det offentlege.
                                    </ListItem>
                                ]}
                            />
                            <ListItem
                                primaryText="Kven kan opprette ein digital postkasse?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="info">
                                        For å opprette ein digital postkasse må du ha
                                        <ul>
                                            <li> norsk fødselsnummer eller D-nummer</li>
                                            <li> elektronisk ID fra BankID, BankID på mobil, Buypass eller
                                                Commfides
                                            </li>
                                        </ul>
                                    </ListItem>
                                ]}
                            />
                            <ListItem
                                primaryText="Kan eg ha to digitale postkassar?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="info">
                                        Ja, men til post frå det offentlege må du velje ein av postkassane, slik at
                                        stat og kommune veit kvar dei skal sende posten din.Du kan sjå kva postkasse
                                        di til kvar tid har ved å logge deg inn på 'Dine kontaktopplysningar'.
                                        Kontakt ID-porten brukarstøtte på grønt nummer 800 30 300 om du har
                                        spørsmål om dette (frå utlandet: +47 24 05 56 03).
                                    </ListItem>
                                ]}
                            />
                            <ListItem
                                primaryText="Kostar det noko å ha digital postkasse?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="info">
                                        Nei, digital postkasse er gratis å opprette og bruke for innbyggjarane.
                                        Lastar du sjølv opp mange dokument eller bilde, må du betale for å få
                                        lagringsplass ut over 1GB.
                                    </ListItem>
                                ]}
                            />
                        </List>
                    </Dialog>
                    <hr className="Headline"/>
                    <CardText className="CardText">
                        <p>
                        Du har enda ikke valgt noen postkasse. Du må selv opprette din egen digitale postkasse
                        hos e-Boks eller Digipost for å motta og oppbevare post digitalt fra det offentlige.
                        </p>
                        <br/>
                        <FlatButton
                            icon={<img src="http://sykeavbruddskassen.no/wp-content/uploads/2015/12/digipost-logo.png" width={70} height={'auto'} alt="logo til digipost"/>}
                            primary={true}
                            label="Opprett Digipost"
                            href="https://www.digipost.no/app/registrering#/"
                        />
                        <br/>
                        <FlatButton
                            icon={<img src="https://www.e-boks.com/media/1275/eboks-no-logo-1000x197.png" width={70} height={'auto'} alt="logo til E-boks"/>}
                            primary={true}
                            label="Opprett E-boks"
                            href="https://www.e-boks.com/norge/nb/ny-bruker/"
                        />
                        <div className="ToggleBtn">
                            <Toggle
                                onToggle={mail.setPostbox}
                                defaultToggled={false}
                            />
                        </div>
                    </CardText>
                </Card> )
        };

        var getcardForExistingMailUser = function (mail, postbox) {
            return (
                <Card className="Card">
                    <Row className="CardHeader">
                        <Col md={1} className="Icon">{<Email />}</Col>
                        <Col md={10}><h4>Digital postkasse</h4></Col>
                    </Row>
                    <hr className="Headline"/>
                    <CardText className="CardText">
                        <div className="CardInfoText">
                            <Row>
                                <Col md={4}>{img}</Col>
                                <Col md={8}>Du mottar idag post fra det offentlige til din digitale postkasse hos <strong>  { postbox } </strong></Col>
                            </Row>
                        </div>
                        <div className="EditBtn">
                            <FlatButton
                                label="Endre postkasse"
                                primary={true}
                                icon={<Edit />}
                                onTouchTap={mail.handleOpen}/>
                        </div>
                        <div className="ToggleBtn">
                            <Toggle
                                onToggle={mail.removePostbox}
                                defaultToggled={true}
                            />
                        </div>
                    </CardText>
                    <Dialog
                        title="Endre din digital postkasse"
                        actions={actions}
                        modal={false}
                        open={mail.state.open}
                        onRequestClose={mail.handleClose}
                    >
                        <div>
                            Ønsker du å endre din digitale postkasse?
                        </div>
                    </Dialog>
                </Card>
            );
        };


        let postbox = this.state.postbox;
        if (postbox == 'Digipost' || postbox == 'E-boks') {
            return ( getcardForExistingMailUser(this, postbox) )
        } else {
            return ( getcardForNewMailUser(this) ) //if not user of digipost and E-boks
        }
    }
}


module.exports = Mail;
