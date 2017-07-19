import React from 'react';
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
// import Doctor from 'material-ui/svg-icons/social/person';
// import Appointment from 'material-ui/svg-icons/action/event';
// import Help from 'material-ui/svg-icons/action/help';
// import Help from 'material-ui/svg-icons/action/help';
// import Prescription from 'material-ui/svg-icons/action/description';
// import Help from 'material-ui/svg-icons/action/help';

// import ActionInfo from 'material-ui/svg-icons/action/info';


class HealthComponents extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        let YourDoctor = (
            <Card className="CardHeader">
                <Row className="CardHeader">
                    <Col sm={6} lg={7}><h4>Din fastlege: </h4> Ola Nordmann</Col>
                </Row>
            </Card>

        );


        let NextAppointment = (
            <Card>
                <Row className="CardHeader">
                    <Col sm={6} lg={7}><h4>Neste legetime: </h4> </Col>
                </Row>
            </Card>


        );

        let AppointmentHistory = (
            <Card>
                <Row className="CardHeader">
                    <Col sm={6} lg={7}><h4>Legetime historikk: </h4></Col>
                </Row>

            </Card>


        );

        let YourReferrals = (
            <Card>
                <Row className="CardHeader">
                    <Col sm={6} lg={7}><h4>Dine henvisninger: </h4></Col>
                </Row>

            </Card>


        );

        let ChangeDoctor = (
            <Card>
                <Row className="CardHeader">
                    <Col sm={6} lg={7}><h4>Bytt fastlege: </h4></Col>
                </Row>
            </Card>


        );

        let Prescriptions = (
            <Card>
                <Row className="CardHeader">
                    <Col sm={6} lg={7}><h4>Dine resepter: </h4></Col>
                </Row>
            </Card>


        );

        return (
            <div>
                <Row><Col md={10}>{YourDoctor}</Col></Row>
                <Row>
                    <Col md={4}>
                        {NextAppointment}
                        {YourReferrals}
                        {ChangeDoctor}
                    </Col>
                   <Col md={6}>
                       {AppointmentHistory}
                       {Prescriptions}
                   </Col>
                </Row>
            </div>
        )

    }
}


export default HealthComponents;