
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


class Username extends React.Component {

    render () {

        let user = "Fornavn Etternavn";

        const styles = {
            width: '30%'
        }

        return (
                <div className="page-header" style={styles}>
                    <h1>{user}</h1>
                </div>
        )
    }
}


module.exports = Username;
