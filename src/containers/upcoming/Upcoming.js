import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTwitter } from '../../actions';

import InterestForm from '../interestForm/InterestForm';

class Upcoming extends Component {
    componentDidMount() {
        this.props.fetchTwitter()
    }

    renderItems() {
        return this.props.twitter.tweets.twitter.map(({ full_text, extended_entities, id }) => {
            const lastIndex = full_text.lastIndexOf(" ");
            const text = full_text.substring(0, lastIndex);
            return <div key={id} className="eventWrapper">
                <div className="eventImageWrapper">
                    {extended_entities.media.map(({ id, media_url_https }) => <img className="img-responsive" key={id} src={media_url_https} alt="Upcoming event" />)}
                </div>
                <div className="eventTextWrapper">
                    <p>{text}</p>
                    <h4>Запись на игру</h4>
                    <InterestForm/>
                </div>
            </div>;
        });
    }

    render() {
        if (this.props.twitter.tweets.twitter) {
            return <section className="upcoming" id="upcoming">
                <h2>Предстоящие Мероприятия</h2>
                <div>
                    {this.renderItems()}
                </div>
            </section>;
        }
        return <div id="upcoming">Loading</div>;
    }
}

function mapStateToProps({ twitter }) {
    return { twitter };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTwitter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);