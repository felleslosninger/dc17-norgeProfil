var React = require('react');
var ReactDOM = require('react-dom');

var hei = require('./components/hei.jsx');

class App extends React.Component {
    render(){
        return(
            <div>
                <hei/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));
