import React from 'react';

function CreateEvent(props) {
  
  function calcNextEventId(props) {
    
    let nextId = props.eventsIdList.length + 1000; 
    console.log("nextId: ",nextId);
    return nextId;
  }

  let nextId = calcNextEventId(props);
  
  return (
    <div className="CreateEvent-main">
      <header className="card-header">  
        <h2 className="card-icon">CREATE</h2>
        <h2 className="card-title">{`Event ID: ${nextId}`}</h2>
        <h2 className="card-x">X</h2>
      </header>
      <div className="editor-image-container">
        <img src="./media/img_1001.png" alt="event" className="card-image" ></img>
      </div>
      <div className="editor-body">
          <div className="cam-info-container info-container">
                <h6 className="info info-title">Camera Name:</h6>
                <p className="info info-data">{props.editedEvent[0].cameraInfo.name}</p>
              
                <h6 className="info info-title">IP Address:</h6>
                <p className="info info-data">{props.editedEvent[0].cameraInfo.ip}</p>
              
                <h6 className="info info-title">Site / Location:</h6>
                <p className="info info-data">{props.editedEvent[0].cameraInfo.location}</p>
              
                <h6 className="info info-title">Manufacturer/Model:</h6>
                <p className="info info-data">{props.editedEvent[0].cameraInfo.model}</p>
          </div>
          <div className="event-info-container info-container">
                <h6 className="info info-title">Creating Event:</h6>
                <input className="editor-selectId info info-data" value={`${nextId}`} disabled={true} ></input>
                
                <h6 className="info info-title">Select Status:</h6>
                <select className="editor-selectId info info-data">
                    <option value={props.eventStatusOptions[0]}>{props.eventStatusOptions[0]}</option>
                    <option value={props.eventStatusOptions[1]}>{props.eventStatusOptions[1]}</option>
                    <option value={props.eventStatusOptions[2]}>{props.eventStatusOptions[2]}</option>
                    <option value={props.eventStatusOptions[3]}>{props.eventStatusOptions[3]}</option>
                </select>
                
                <h6 className="info info-title">Select Category:</h6>
                <select className="editor-selectId info info-data">
                    <option value={props.eventCatOptions[0]}>{props.eventCatOptions[0]}</option>
                    <option value={props.eventCatOptions[1]}>{props.eventCatOptions[1]}</option>
                    <option value={props.eventCatOptions[2]}>{props.eventCatOptions[2]}</option>
                    <option value={props.eventCatOptions[3]}>{props.eventCatOptions[3]}</option>
                    <option value={props.eventCatOptions[4]}>{props.eventCatOptions[4]}</option>
                </select>
                
                <h6 className="info info-title">Select Classification:</h6>
                <select className="editor-selectId info info-data">
                    <option value={props.eventClassOptions[0]}>{props.eventClassOptions[0]}</option>
                    <option value={props.eventClassOptions[1]}>{props.eventClassOptions[1]}</option>
                    <option value={props.eventClassOptions[2]}>{props.eventClassOptions[2]}</option>
                    <option value={props.eventClassOptions[3]}>{props.eventClassOptions[3]}</option>
                    <option value={props.eventClassOptions[4]}>{props.eventClassOptions[4]}</option>
                    <option value={props.eventClassOptions[5]}>{props.eventClassOptions[5]}</option>
                </select>
          </div>
        
        <div className="button-container">
          <button className="editor-buttons">Save</button>
          <button className="editor-buttons">Cancel</button>
          <button className="editor-buttons">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;