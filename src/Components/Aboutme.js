import React from "react";
import "../App.css";
import "./Aboutme.css";

function Aboutme() {
  
  return (
    <div className="About">
      <div className="Aboutme-container">
        <h1>ABOUT THE CREATOR</h1>
        <br/>
        <div className="row">
          <img id="image1" src='/images/MePicEdit.jpg' alt='Gustavo Ferrari'></img>
          <br/>
          <div className="column">
          <h4>Gustavo Ferrari</h4>
          <br/>
            <p>Hello and thank you for visiting the FitTracker!</p>
            <br/>
            <p>FitTracker was born out of a school project aimed to learn and develop skills using Python. I started with a basic GUI-less Python program which would calculate certain statistics I like to keep for my workouts. As my experience and understanding in software development grew, so did the concept for my FitTracker project. To test my full stack abilities, I expanded the software to include a GUI/interface using PyQt5 and the AmazonRDS hosted database written in MySQL. </p>
            <br/>
            <p>Designing a GUI was difficult at first as it was the first time I had dealt with event driven programming. And though it was a challenge, figuring it out in the end was incredibly satisfying and I was able to gain the tools and knowledge which were essential in creating this website.</p>
            <br/>
            <p>I created the FitTracker website using Javascript and React, keeping user experience in mind. While the Register page looks simple, there is more there than meets the eye. I wrote an API that works as the middleman between this website and the database. Once you submit your registration, a Python-based API sends your data to the server so it can be kept safe, secure, and accessible at all times.</p>
            <br/>
            <p>If you enjoyed the tracker, this project, or have any suggestions please reach out to me at gferrari18@my.whitworth.edu.</p>
            <br/>
            <p>If you are interested in knowing about other things that I am working on, check out my <a href="https://github.com/gferrari18">Github</a></p>
          </div>
        </div>
        <p></p>
      </div>
  
    </div>
  );
}

export default Aboutme;
