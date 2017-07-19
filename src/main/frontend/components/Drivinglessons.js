import React from 'react';
import {Card, CardActions,CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Drivinglessons extends  React.Component {
    render(){
        return (
            <div>
                <Card className="Card">
                    <CardTitle title="Opplæring"/>
                    <CardText>
                        <p>
                            Trafikanter skal ha de kunnskaper og ferdigheter, den selvinnsikt og risikoforståelse, som er
                            nødvendig for å kjøre på en måte som er trafikksikker, gir god samhandling, fører til god
                            trafikkavvikling, tar hensyn til helse, miljø og andres behov og er i samsvar med gjeldende
                            regelverk. Opplæring skal gjennomføres hos godkjent trafikkskoler.
                        </p> <br/> <br/> <p>
                            Før du kan ta kjøretimer eller øvelseskjøre, må du ta trafikalt grunnkurs. Når du har fullført
                            trafikalt grunnkurs, får du et bevis som gir deg rett til å øvelseskjøre. Du må ha med
                            legitimasjon med gyldig bilde.
                        </p>
                    </CardText>
                    <CardActions>
                        <FlatButton label="Finn godkjent trafikkskole" href="https://www.vegvesen.no/forerkort/ta-forerkort/Finn+godkjent+trafikkskole#/"/>
                        <FlatButton label="Se bevis for øvelseskjøring" href="https://www.vegvesen.no/om+statens+vegvesen/presse/nyheter/nasjonalt/bevis-for-%C3%B8velseskj%C3%B8ring-p%C3%A5-nett"/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Drivinglessons;