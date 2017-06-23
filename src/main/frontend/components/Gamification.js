var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Overlay = require('react-bootstrap/lib/Overlay');
var Popover = require('react-bootstrap/lib/Popover');


import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';
import Done from 'material-ui/svg-icons/action/done'
import Remove from 'material-ui/svg-icons/content/remove'
import Subheader from 'material-ui/Subheader';

class Gamification extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true,
            completed: 64,
            open: false
        };
    };

    handleNestedListToggle(item) {
        this.setState({
            open: item.state.open,
        });
    };

    render() {

        let percent = this.state.completed;

        const tooltip =(
            <Popover id="tool" className="ToolTip">
                <Subheader>Styrke brukerprofil: <strong>{percent} %</strong> </Subheader>
                <ListItem
                    key={0}
                    primaryText="Steg: "
                    initiallyOpen={false}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Mobilnummer"
                            leftIcon={<Done />}
                            disabled={true}
                        />,
                        <ListItem
                            key={2}
                            primaryText="Email"
                            leftIcon={<Done />}
                            disabled={true}
                        />,
                        <Divider/>,
                        <ListItem
                            key={3}
                            primaryText="Digital postkasse"
                            leftIcon={<Remove />}
                            disabled={true}
                        />
                    ]}
                />
            </Popover>);

        const sharedProps = {
            show: this.state.show,
            container: this,
        };


        return (
            <div style={{position: 'relative' }}>
                <LinearProgress mode="determinate" value={this.state.completed}/>
                <Overlay {...sharedProps} placement="bottom">
                    { tooltip }
                </Overlay>
            </div>
        );
    }
}


module.exports = Gamification;
