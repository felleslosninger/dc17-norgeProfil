/**
 * Created by camp-cms on 12.07.2017.
 */

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

class DrivingLicence extends  React.Component {
    render(){
        return (
            <div>
                <Card>
                    <CardTitle title="Dine førerkort" />
                    <CardText>
                        <p>
                        På din side kan du se hva du kan kjøre, se bevis for rett til øvelseskjøring samt melde tapt eller
                            gjenglemt førerkort eller kompetansebevis.</p> <br/> <p>
                        Ønsker du å sjekke om du har prikker må du møte opp på en politistasjon i åpningstiden og ha
                        med deg legitimasjon. <a href="https://www.politi.no/finn-ditt-politi/"> les mer </a>
                        </p>
                    </CardText>
                        <CardActions>
                            <FlatButton label="Se ditt førerkort" href="https://www.vegvesen.no/dinside/"/>
                            <FlatButton label="Meld tap av førerkort" href="https://www.vegvesen.no/forerkort/har-forerkort/Mistet%2Bforerkort"/>
                        </CardActions>
                </Card>
            </div>
        )
    }
}

export default DrivingLicence;