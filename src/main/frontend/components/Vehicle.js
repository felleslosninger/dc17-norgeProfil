/**
 * Created by camp-cms on 12.07.2017.
 */

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Vehicle extends  React.Component {
    render(){
        return (
            <div>
                <Card>
                    <CardTitle title="Dine kjøretøy" />
                    <CardText>
                        <p>
                        På Din side kan du se informasjon om kjøretøy, sende og motta salgsmelding, se status for omregistrering og betale
                        omregistreringsavgiften, melde tap av vognkort/last ned midlertidig vognkort og søke om
                        personlig bilskilt.
                        </p>
                    </CardText>
                    <CardActions>
                        <FlatButton label="Se kjøretøysopplysninger" href="https://www.vegvesen.no/dinside/"/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Vehicle;