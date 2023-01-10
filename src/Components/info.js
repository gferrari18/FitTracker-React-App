import React from "react";
import "../App.css";
import "./info.css";

function Info() {
  
  return (
    <div className="About">
    <br/>
    <div className="Info-container">
      <h1>Track your measurements</h1> 
      <br/> 
      <img src='/images/enterinfo.jpg' alt='screenshot'></img>
      <br/>
      <p> FitTracker keeps track of your body measurements</p>
    </div>
    <br/>
    <div className="Info-container">
      <h1>Track your results</h1> 
      <br/> 
      <img src='/images/viewinfo.jpg' alt='screenshot'></img>
      <br/>
      <p> FitTracker makes it easy for you to compare your results</p>
    </div>
    <br/>
    <div className="Info-container">
      <h1>Track your workouts</h1> 
      <br/> 
      <img src='/images/enterex.jpg' alt='screenshot'></img>
      <br/>
      <p>FitTracker keeps track of your workouts</p>
    </div>
    <br/>
    <div className="Info-container">
      <h1>Track your progess</h1> 
      <br/> 
      <img src='/images/viewex.jpg' alt='screenshot'></img>
      <br/>
      <p>FitTracker helps track your progress</p>
    </div>
    <br/>
    </div>
  );
}

export default Info;
