var React = require('react');
var ReactDOM = require('react-dom');

var Hei = require('./components/hei.jsx');

class App extends React.Component {
    render(){
        return(
            <div>
                <Hei/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));
