import React, { Component} from 'react';
import FacebookProvider, { Share } from 'react-facebook';

class FacebookShare extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        let quote = "Jippi! Jeg har opptjent " + this.props.score.points + " poeng, og er " + this.props.score.percentage + "% fullverdig digital borger!";
        return (
            <FacebookProvider appId="1590974227639289">
                <Share href="http://www.norge.no" hashtag="#DigitalBorger" quote={quote}>
                    <button type="button">Share</button>
                </Share>
            </FacebookProvider>
        );
    }
}

FacebookShare.propTypes = {
    score: React.PropTypes.object.isRequired,
};

export default FacebookShare;