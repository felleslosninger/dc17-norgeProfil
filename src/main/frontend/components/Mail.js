var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import Modal from 'react-modal';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {Glyphicon} from "react-bootstrap";


class Mail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            postbox: 'E-boks', //some init value
            hasPostbox: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references sync'd and can be accessed.

    }

    closeModal() {
        console.log("close");
        this.setState({modalIsOpen: false});
    }

    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });
    }


    saveInfo() {
        console.log("saved");
        console.log("Postbox: ", this.state.postbox);
        this.setState({modalIsOpen: false});

    };




    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

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
                                <Col md={12}><h4><img src="icons/face.svg"/> Din digitale postkasse</h4></Col>
                            </div>
                        </div>
                    </Row>
                    <CardText className="CardText">
                        <div className="CardInfoText"> Du kan nå motta og oppbevare post fra det offentlige
                            hos { postbox }. Posten vil bli lagret på en trygg og sikker måte.
                        </div>
                        <button type="button" className="btn btn-secondary" onClick={mail.openModal}>
                            <Glyphicon glyph="glyphicon glyphicon-pencil"/>
                        </button>
                    </CardText>
                    <Modal
                        isOpen={mail.state.modalIsOpen}
                        onAfterOpen={mail.afterOpenModal}
                        onRequestClose={mail.closeModal}
                        style={customStyles}
                        contentLabel="Endre digitalpostkasse">
                        <h3 ref={subtitle => mail.subtitle = subtitle}>Endre digital postkasse</h3>
                        <select name="postbox" value={ mail.state.postbox } onChange={ mail.handleChange }>
                            <option value="E-boks">E-boks</option>
                            <option value="Digipost">Digipost</option>
                        </select>
                        <div class="Container">
                            <button className="btn btn-success" onClick={mail.saveInfo}>Lagre</button>
                            <button className="btn btn-secondary" onClick={mail.closeModal}>Lukk</button>
                        </div>
                    </Modal>
                </Card>
            )
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
