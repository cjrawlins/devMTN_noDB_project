import React, { Component } from 'react';
import EditEvent from './EditEvent';
import CreateEvent from './CreateEvent'

class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editedEvent: props.fileEvents,
            eventsIdList: [1000, 1001, 1002, 1003, 1004, 1005],
            eventStatusOptions: ["New", "Categorized", "Classified", "Data Complete"],
            eventCatOptions: ["Uncategorized", "Alarm", "Nuisance", "False", "Test / Other"],
            eventClassOptions: ["Unclassified", "Person", "Vehicle", "Animal", "Plant/Wind", "Inanimate Object"]
        }

        function getListIDs() {
            
        }
        
    }

    render() {
        let eventIdMap = () => {
            this.state.eventIdList.map( id => {
            return <option value={id}>{id}</option> 
            } )
        } 


        return (
            <div className="Editor-main">
                <EditEvent
                    eventsIdList = {this.state.eventsIdList}
                    editedEvent = {this.state.editedEvent}
                    eventIdList = {this.state.eventsIdList}
                    eventStatusOptions = {this.state.eventStatusOptions}
                    eventCatOptions = {this.state.eventCatOptions}
                    eventClassOptions = {this.state.eventClassOptions}
                    eventIdMap = {this.eventIdMap}
                />
            </div>
        )
    }

}

export default Editor;