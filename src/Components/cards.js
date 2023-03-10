import React from "react";
import CardItem from "./carditem";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Be a part of it!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/pic1.jpg"
              text="Stay on Track"
              label="Register"
              path="/register"
            />
            <CardItem
              src="/images/pic2.jpg"
              text="Download now!"
              label="Download"
              path="/download"
            />
             <CardItem
              src="/images/SpokaneDowntown.jpg"
              text="About"
              label="About me!"
              path="/About"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
