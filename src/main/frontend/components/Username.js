
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


class Username extends React.Component {

    render () {

        let user = "Fornavn Etternavn";

        return (
            <div className="User">
                <h1>{user}</h1>
            </div>
        )
    }
}


module.exports = Username;
