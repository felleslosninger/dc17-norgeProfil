
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


class Username extends React.Component {

    render () {

        return (
                <div>
                    <h1>{this.props.username}</h1>
                </div>
        )
    }
}

Username.PropTypes = {
    username : React.PropTypes.string.isRequired,
};

export default Username;
