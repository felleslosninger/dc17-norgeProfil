import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (value) {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div className="Feed">
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Nylig aktivitet" value={0} />
                    <Tab label="Din aktivitet" value={1} />
                    <Tab label="Offentlig sektors aktivitet" value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <h2 style={styles.headline}>All nylig aktivitet</h2>
                        - Både egen og offentlig sektors.<br />
                    </div>
                    <div style={styles.slide}>
                        Din aktivitet med bruk av IDporten
                    </div>
                    <div style={styles.slide}>
                        Data hentet ut av offentlig sektor
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

module.exports = Feed;