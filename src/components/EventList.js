import React, { Component } from 'react';
import EventCard from './EventCard';

class EventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="EventList-main">
                <h1>editor</h1>
                <EventCard></EventCard>
            </div>

        );
    }

}

export default EventList;