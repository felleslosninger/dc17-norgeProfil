/**
 * Created by camp-cms on 12.07.2017.
 */

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

class Teori extends  React.Component {
    render(){
        return (
            <div>
                <Card className="Card">
                    <CardTitle title="Teori"/>
                    <CardText>
                        <p>
                        Hos de fleste førerkortklassene må du ta en teoriprøve for å få godkjent opplæringen. Før du tar
                        teoriprøven må du levere søknad om førerkort. Når din søknad er registrert og godkjent kan du ta
                        teoriprøven. Hvis du ikke behersker skriftlig norsk i tilstrekkelig grad til å kunne besvare
                        spørsmålene, har lese- og skrivevansker eller tilsvarende, kan du få tillattelse av
                        regionvegkontoret til å ta en tilrettelagt prøve. Om nødvendig kan prøven gjennomføres med tolk.
                        </p>
                    </CardText>
                    <CardActions>
                        <FlatButton label="Søk om førerkort" href="https://www.vegvesen.no/dinside/?goto=https%3A%2F%2Fwww.vegvesen.no%2fdinside%2fdittforerkort%2fsok-om-forerkort"/>
                        <FlatButton label="Søk om tilrettelagt teoriprøve" href="https://www.vegvesen.no/_attachment/123909/binary/1181732?fast_title=S%C3%B8knad+om+tilrettelagt+teoripr%C3%B8ve+%28bokm%C3%A5l%29.pdf" />
                        <FlatButton label="Finn din trafikkstasjon" href="https://www.vegvesen.no/om+statens+vegvesen/kontakt+oss/kontaktskjema/trafikkstasjoner" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Teori;