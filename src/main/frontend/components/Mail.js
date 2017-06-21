var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';




class Mail extends React.Component {
    constructor(props){
        super(props);
    }



    render () {
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
                        <div> Du har enda ikke valgt noen postkasse. Du må selv opprette din egen digitale postkasse hos e-Boks eller Digipost for å
                            få post digitalt fra det offentlige. </div>
                        <a href="https://www.digipost.no/app/registrering#/"> Opprett digipost </a>
                        <a href="https://www.e-boks.com/norge/nb/ny-bruker/"> Opprett e-boks </a>
                    </CardText>
                </Card>
        )
    }
}


module.exports = Mail;
