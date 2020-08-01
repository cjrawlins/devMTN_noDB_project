import React, { Component } from 'react';
import './reset.css';
import './App.css';

// Import Other Components //
import EventList from './components/EventList';
import eventCard from './components/EventCard'
import cardInfo from './components/cardInfo';
import image from './components/eventImage';

import Editor from './components/Editor';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
}

render() {

    return (
    <div className="App-main">
      <header className="header-wrapper">
        <div className="header-content">
          <img className="header-image"></img>
        </div>
      </header>
      <main className="main-wrapper">
        <EventList>
            <eventCard></eventCard>

        </EventList>
        <Editor>
          <editEvent></editEvent>
          <createEvent></createEvent>
        </Editor>
      </main>
    </div>
  )};
}

export default App;
