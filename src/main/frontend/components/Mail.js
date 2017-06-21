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
            postbox: 'E-boks' //some init value
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


    saveInfo () {
        console.log("saved");
        console.log("Postbox: ", this.state.postbox);
        this.setState({modalIsOpen: false});

    };


    render () {
        const customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        };

        let postbox = this.state.postbox;

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
                        hos { postbox }. Posten vil bli lagret på en trygg og sikker måte </div>
                    <button type="button" className="btn btn-secondary" onClick={this.openModal}>
                        <Glyphicon glyph="glyphicon glyphicon-pencil"/>
                    </button>
                </CardText>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Endre digitalpostkasse">
                    <h3 ref={subtitle => this.subtitle = subtitle}>Endre digital postkasse</h3>
                        <select name = "postbox" value = { this.state.postbox } onChange = { this.handleChange }>
                            <option value="E-box">E-box</option>
                            <option value="Digipost">Digipost</option>
                        </select>
                    <div class="Container">
                        <button className="btn btn-success" onClick={this.saveInfo}>Lagre</button>
                        <button className="btn btn-secondary" onClick={this.closeModal}>Lukk</button>
                    </div>
                </Modal>
            </Card>

        )
    }
}


module.exports = Mail;
