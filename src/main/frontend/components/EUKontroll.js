import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Vehicle extends  React.Component {
    render(){
        return (
            <div>
                <Card className="Card">
                    <CardTitle title="EU-kontroll" />
                    <CardText>
                        Når bilen har vært på EU-kontroll for første gang, fire år etter førstegangsregistrering, skal
                        den kontrolleres hvert annet år. Det siste sifferet på bilskiltet samfaller med måneden året
                        bilen skal kontrolleres.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Bestill EU-kontroll" href="https://www.vegvesen.no/kjoretoy/Kjop+og+salg/import/bestill-kjoretoykontroll"/>
                        <FlatButton label="Sjekk frist for EU-kontroll" href="https://www.vegvesen.no/kjoretoy/Eie+og+vedlikeholde/EU-kontroll/Kontrollfrist"/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Vehicle;