import React from "react";
import RunnerPicture from "../images/katie-zaferes.png";
import WeddingPicture from "../images/wedding-photography.png";
import BikePicture from "../images/mountain-bike.png";
import StarRating from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={RunnerPicture} alt="Runner" className="card--image" />
      <div className="card--stats">
        <img src={StarRating} alt="Rating" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Saferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
