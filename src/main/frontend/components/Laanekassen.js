/**
 * Created by camp-cms on 10.07.2017.
 */

let React = require("react");

class LaaneKassen extends React.component{

    render(){
        return (
            <div>
            <Row>
            <Col xs={12}> <h3> Statens lånekasse </h3> </Col>
            </Row>
            <Row>
            <Col xs={12}> <p>  Du kan søke om lån fra statens lånekasse. Om du er borteboer og ikke er mer enn 60 studiepoeng forsinket
                fra normal studieprogresjon kan du få 40% omgjort til stipend. Du må være ferdig med tilbakebetaling
                innen du er 65 år, så støtten kan være redusert om du fyller 45 år før du er ferdig med utdanningen.
                Søknadsfrist for å søke om støtte er 15. August og 15. November.  </p> </Col>
        </Row>
        <Row>
            <Col xs={5}> <FlatButton label="Søk om studielån"
                                     href="https://www.lanekassen.no/nb-NO/"/> </Col>
            <Col xs={2} />
            <Col xs={5}> <FlatButton label="Beregn nedbetaling av studielån"
                                     href="https://app.lanekassen.no/slnebe/"/> </Col>
            </Row>
            </div>
        )
    }
}

export default LaaneKassen;