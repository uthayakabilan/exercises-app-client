import React from "react";
import "./Card.css";
// import { exerciseData } from "../../utils/data";
const Card = ({ data }) => {
  return (
    <div className="card-container" key={data.id}>
      <div className="card-inner-container">
        <div className="image">
          <img src={data.gifUrl} alt="exercise" />
        </div>
        <div className="desc">
          <p className="exercise-name">
            Name : <span>{data.name}</span>
          </p>
          <p className="exercise-part">
            Body Part : <span>{data.bodyPart}</span>
          </p>
          <p className="exercise-target">
            Target : <span>{data.target}</span>
          </p>
          <p className="exercise-equipment">
            Equipment : <span>{data.equipment}</span>
          </p>
          <button className="exercise-add-button">Add to Workouts</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
