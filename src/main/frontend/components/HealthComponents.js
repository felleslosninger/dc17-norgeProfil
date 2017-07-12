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

    render(){
        let YourDoctor = (
            <Card className="CardHeader">
                <Row className="CardHeader">
                    <Col sm={3} lg={2} className="Icon">

                    </Col>
                    <Col sm={6} lg={7}><h4>Din fastlege: </h4></Col>
                </Row>
            </Card>

        );
        // const NextAppointment = () => (
        //     <Card>
        //
        //     </Card>
        //
        //
        // );
        // const AppointmentHistory = () => (
        //     <Card>
        //
        //     </Card>
        //
        //
        // );
        // const YourReferrals = () => (
        //     <Card>
        //
        //     </Card>
        //
        //
        // );
        // const ChangeDoctor = () => (
        //     <Card>
        //
        //     </Card>
        //
        //
        // );
        // const Prescriptions = () => (
        //     <Card>
        //
        //     </Card>
        //
        //
        // );

        return(
            <div>{YourDoctor}</div>
        )

    }
}


export default HealthComponents;