
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


class Username extends React.Component {

    render () {

        let user = "Ola Nordmann";

        return (
                <div className="page-header">
                    <h1>{user}</h1>
                </div>
        )
    }
}


module.exports = Username;
