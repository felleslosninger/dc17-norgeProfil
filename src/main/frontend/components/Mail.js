var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


import {Card, CardHeader, CardText} from 'material-ui/Card';
import Email from 'material-ui/svg-icons/communication/email';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class Mail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            postbox: 'Digipost', //some init value
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleChange() {
        if(this.state.postbox == 'E-boks'){
            this.setState({postbox:'Digipost'});
        } else {
            this.setState({postbox:'E-boks'});
        }
        this.setState({open:false});
    }

    saveInfo() {
        console.log("saved");
        console.log("Postbox: ", this.state.postbox);
        this.setState({open: false});
    };

    handleOpen(){
        this.setState({open: true});
    };

    handleClose(){
        this.setState({open: false});
    };

    render() {
        const urlListStyle = {
            listStyleType: 'none',
            float: 'left',
            width:'150px',
            height:'75px'
        };

        const urlElementListStyle = {
            display: 'block',
            backgroundColor:'white',
            color: 'black',
            border: '2px solid #e7e7e7'
        };



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

        var getcardForNewMailUser = function(){
            return ( <Card className="Card">
                <Row>
                    <div className="HeaderRow">
                        <Row className="Headline">
                            <Col md={1} className="Icon">{<Email />}</Col>
                            <Col md={10}><h4>Digital postkasse</h4></Col>
                        </Row>
                    </div>
                </Row>
                <CardText className="CardText">
                    <p>
                    Du har enda ikke valgt noen postkasse. Du må selv opprette din egen digitale postkasse
                    hos e-Boks eller Digipost for å motta og oppbevare post digitalt fra det offentlige. For å opprette
                        en digital postkasse må du ha norsk fødselsnummer eller D-nummer, samt elektronisk ID fra
                        BankID, BankID på mobil, Buypass eller Commfides.
                    </p>
                    <FlatButton
                        label="Opprett Digipost"
                        href="https://www.digipost.no/app/registrering#/"
                    />
                    <FlatButton
                        label="Opprett E-boks"
                        href="https://www.e-boks.com/norge/nb/ny-bruker/"
                        />
                </CardText>
            </Card> )
        };

        var getcardForExistingMailUser = function (mail, postbox) {
            return (
                <Card className="Card">
                    <Row>
                        <div className="HeaderRow">
                            <div className="Headline">
                                <Col md={1} className="Icon">{<Email />}</Col>
                                <Col md={10}><h4>Digital postkasse</h4></Col>
                            </div>
                        </div>
                    </Row>
                    <CardText className="CardText">
                        <div className="CardInfoText"> Du har valgt å motta og oppbevare post fra det offentlige
                            hos { postbox }. Du åpner den digitale postkassen ved å logge inn via hjemmesiden deres.
                        </div>
                        <div className="EditBtn">
                            <FlatButton
                                label="Endre postkasse"
                                primary={true}
                                icon={<Edit />}
                                onTouchTap={mail.handleOpen}/>
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
                                Ønsker du virkelig å endre din digitale postkasse?
                            </div>
                        </Dialog>
                </Card>
            );
        };


        let postbox = this.state.postbox;
        if(postbox == 'Digipost' || postbox == 'E-boks') {
            return ( getcardForExistingMailUser(this, postbox) )
        } else {
            return ( getcardForNewMailUser() ) //if not user of digipost and E-boks
        }
    }
}


module.exports = Mail;
