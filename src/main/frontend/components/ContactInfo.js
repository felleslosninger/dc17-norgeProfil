var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Modal from 'react-modal';
import {Glyphicon} from "react-bootstrap";


class ContactInfoCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            email: '',
            phone: ''
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
        console.log("Email: ", this.state.email, "Phone: ", this.state.phone)
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

        let phoneNumber = this.state.phone;

        let eMail = this.state.email;

        return (
           <Card className="Card">
               <Row>
                   <div className="HeaderRow">
                       <div className="Headline">
                           <Col md={12}><h4><img src="icons/face.svg"/> Registrert kontaktinformasjon</h4></Col>
                       </div>
                   </div>
               </Row>
                <CardText className="CardText">
                    <div className="CardInfoText">Informasjonen nedenfor lagres i et felles kontaktregister som stat og kommune skal bruke når de kontakter deg.</div>
                    <div className="phone">Mobilnummer: {phoneNumber}</div>
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
                       hintText={phoneNumber}
                       floatingLabelText="Mobilnummer"
                       name = "phone"
                       value = { this.state.phone }
                       onChange = { this.handleChange }
                   />
                   <TextField
                       hintText={eMail}
                       floatingLabelText="E-post"
                       name = "email"
                       value = { this.state.email }
                       onChange = { this.handleChange }
                   />
                   <button className="btn btn-success" onClick={this.saveInfo}>Lagre</button>
                   <button className="btn btn-secondary" onClick={this.closeModal}>Lukk</button>
               </Modal>
            </Card>

        )
    }
}

module.exports = ContactInfoCard;