/**
 * Created by camp-cms on 10.07.2017.
 */

let React = require("react");

class Dagpenger extends React.component{

    render(){
        return (

        <div>
            <Row>
                <Col xs={12}> <h3> Dagpenger </h3> </Col>
            </Row>
            <Row>
                <Col xs={12}> <p> Du har rett på dagpenger om inntekten din er halvert, er en reell arbeidssøker som sender inn
                    meldekort til Nav hver 14. dag og har hatt en minsteinntekt fra lønnet arbeid på minst 1,5 ganger
                    folketrygdens grunnbeløp(G) i året som gikk, eller minst 3 G i løpet av de 3 siste avsluttede
                    kalenderåren </p> </Col>
            </Row>
            <Row>
                <Col xs={5}> <FlatButton label="Din pensjon"
                                         href="https://www.nav.no/no/Person/Pensjon/Hva+kan+jeg+fa+i+pensjon"/> </Col>
                <Col xs={2} />
                <Col xs={5}> <FlatButton label="Dine pensjonsavtaler"
                                         href="https://www.norskpensjon.no/"/> </Col>
            </Row>
        </div>
        )
    }
}

export default Dagpenger;