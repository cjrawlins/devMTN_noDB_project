import React, { Component } from 'react';
import EventCard from './EventCard';

class EventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventsList: props.fileEvents
        }
    }

    render() {
       const eventsListMap = this.state.eventsList.map( e => {
            return <EventCard
                        cardEvents =  {e}
                    />

       }  ) 
        return (
            <div className="EventList-main">
                {eventsListMap}
            </div>

        );
    }

}

export default EventList;