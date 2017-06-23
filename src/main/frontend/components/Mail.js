var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


import {Card, CardHeader, CardText} from 'material-ui/Card';
import Email from 'material-ui/svg-icons/communication/email';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';;
import Edit from 'material-ui/svg-icons/editor/mode-edit';



class Mail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            postbox: 'E-boks', //some init value
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });
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
        const styles = {
            customWidth: {
                width: 200
            },
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
                onTouchTap={this.handleClose}
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
                    Du har enda ikke valgt noen postkasse. Du må selv opprette din egen digitale postkasse
                    hos e-Boks eller Digipost for å få post digitalt fra det offentlige
                    <div>
                        <a href="https://www.digipost.no/app/registrering#/"> Opprett digipost </a>
                        <a href="https://www.e-boks.com/norge/nb/ny-bruker/"> Opprett e-boks </a>
                    </div>
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
                        <div className="CardInfoText"> Du kan nå motta og oppbevare post fra det offentlige
                            hos { postbox }. Posten vil bli lagret på en trygg og sikker måte.
                        </div>
                        <div className="EditBtn">
                            <FlatButton
                                primary={true}
                                icon={<Edit />}
                                onTouchTap={mail.handleOpen}/>
                        </div>
                    </CardText>
                        <Dialog
                            title="Endre din digitale postkasse"
                            actions={actions}
                            modal={false}
                            open={mail.state.open}
                            onRequestClose={mail.handleClose}
                        >
                            <Row className="EditInfo">
                                <Col>
                                    <div>
                                        <select name="postbox" value={ mail.state.postbox } onChange={ mail.handleChange }>
                                            <option value="E-boks">E-boks</option>
                                            <option value="Digipost">Digipost</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </Dialog>
                </Card>
            );
        };


        let postbox = this.state.postbox;
        if(postbox == 'Digipost' || postbox == 'E-boks') {
            return ( getcardForExistingMailUser(this, postbox) )
        } else {
            return ( getcardForNewMailUser() )
        }
    }
}


module.exports = Mail;
