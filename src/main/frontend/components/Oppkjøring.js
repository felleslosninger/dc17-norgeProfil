/**
 * Created by camp-cms on 12.07.2017.
 */

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Oppkjøring extends  React.Component {
    render(){
        return (
            <div>
                <Card>
                    <CardTitle title="Oppkjøring" />
                    <CardText>
                        Når du har bestått all obligatorisk opplæring og teoriprøven, samt har tilfredstillende vandel
                        og helse vil du kunne avlegge en praktisk prøve. Den praktiske prøven måler om kandidaten
                        i tilstrekkelig grad har nådd de målene som er fastsatt for opplæring i den aktuelle klassen.
                        Du må selv stille med kjøretøy til prøven, og det må være godkjent av statens vegvesen. De
                        fleste leier kjøretøy hos sin kjøreskole.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Bestill time for oppkjøring" href="https://www.vegvesen.no/dinside/?goto=https%3A%2F%2Fwww.vegvesen.no%2fdinside%2fdittforerkort%2ftimebestilling"/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Oppkjøring;