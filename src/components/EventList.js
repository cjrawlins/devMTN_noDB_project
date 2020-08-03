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



       const eventsListMap = this.state.eventsList.map( function(curr, index) {
            return <EventCard key={index}
                        cardEvents =  {curr}

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