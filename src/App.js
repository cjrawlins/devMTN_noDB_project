import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import eventsJSON from './noDB-json-test.json';


// Import Other Components //
import EventList from './components/EventList';
import Editor from './components/Editor';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allEvents: [],
      fileEvents: eventsJSON
    }

    
}

componentDidMount() {
  this.getAllEvents();
  console.log('Trying to get All Events');
  
}

getAllEvents = () => {
  axios.get('/api/events')
    .then( res => { 
      this.setState( { allEvents: res.data } )
      // console.log('Axios .then setState')
      // console.log(this.state.allEvents);
    } 
    ).catch( err => console.log("Error",err) )
};

render() {

    //console.log("API Events: ",this.state.allEvents);
    console.log("API Events 1: ",this.state.allEvents[0]);
    
    
    //console.log("File Events: ", this.state.fileEvents);
    console.log("File Events 1: ", this.state.fileEvents[0]);
    //console.log("File Events 1 EventId: ", this.state.fileEvents[0].eventId);
    //console.log("File Events 2 Camera Name: ", this.state.fileEvents[2].cameraInfo.name);

    return (
    <div className="App-main">
      <header className="header-wrapper">
        <div className="header-content">
          <img src="./alert-event-icon.png" alt="alert-event-icon" className="header-image"></img>
          <h1 className="header-title">Alert Image Classifier</h1>
        </div>
      </header>
      <main className="main-wrapper">
        <EventList 
          allEvents = {this.state.allEvents}
          fileEvents = {this.state.fileEvents}
        />
        <Editor />
      </main>
    </div>
  )};
}

export default App;
