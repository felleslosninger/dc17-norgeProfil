var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Modal from 'react-modal';
import AlarmIcon from 'react-material-icons/icons/action/alarm';
import {Glyphicon} from "react-bootstrap";



class ContactInfoCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false };

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
        this.setState({modalIsOpen: false});
    }


    saveInfo () {
        this.setState({modalIsOpen: false});

    };


    render () {
        const cardStyle = {
            height: '20em',
            width: '25em'
        };

        const cardHeaderStyle = {
            borderBottom: '1px solid lightgrey',
            marginRight: '1em',
            marginLeft: '1em'
        };

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

        let phoneNumer = "12345678";

        let eMail = "ola.normann@gmail.com";

        return (
           <Card style={cardStyle} className="Card">
               <Row style={cardHeaderStyle}>
                   <Col md={1}><AlarmIcon/></Col>
                   <Col md={9}><h3>Registert kontaktinformasjon</h3></Col>
               </Row>
                <CardText className="CardText">
                    <div className="CardInfoText">Informasjonen nedenfor lagres i et felles kontaktregister som stat og kommune skal bruke når de kontakter deg.</div>
                    <div className="phone">Mobilnummer: {phoneNumer}</div>
                    <div className="email">E-post: {eMail}</div>
                    <button type="button" className="btn btn-secondary" onClick={this.openModal}><Glyphicon glyph="glyphicon glyphicon-pencil"/></button>
                </CardText>
               <Modal
                   isOpen={this.state.modalIsOpen}
                   onAfterOpen={this.afterOpenModal}
                   onRequestClose={this.closeModal}
                   style={customStyles}
                   contentLabel="Endre kontaktinformasjon">
                   <h3 ref={subtitle => this.subtitle = subtitle}>Endre kontaktinformasjon</h3>
                   <TextField
                       hintText={phoneNumer}
                       floatingLabelText="Mobilnummer"
                   />
                   <TextField
                       hintText={eMail}
                       floatingLabelText="E-post"
                   />
                   <button className="btn btn-success" onClick={this.saveInfo}>Lagre</button>
                   <button className="btn btn-secondary" onClick={this.closeModal}>Lukk</button>
               </Modal>
            </Card>
        )
    }
}

module.exports = ContactInfoCard;