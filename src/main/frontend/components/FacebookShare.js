import React, { Component} from 'react';
import FacebookProvider, { Share } from 'react-facebook';

class FacebookShare extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        let quote = "Jippi! Jeg har opptjent " + this.props.score.points + " poeng, og er " + this.props.score.percentage + "% fullverdig digital borger!";
        return (
            <FacebookProvider  appId="1590974227639289">
                <Share href="http://www.norge.no" hashtag="#DigitalBorger" quote={quote}>
                    <button className="btn-facebook" type="button"><img src="img/fb.png" height={15}/> Del</button>
                </Share>
            </FacebookProvider>
        );
        //logger.info("Bruker la ut facebook notification" + quote);
    }
}

FacebookShare.propTypes = {
    score: React.PropTypes.object.isRequired,
};

export default FacebookShare;