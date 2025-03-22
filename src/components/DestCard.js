import React from "react";

const DestCard = ({ planet }) => {
  return (
    <div className="dest-info" loading="lazy">
      <div className="data">
        <h1>{planet.name}</h1>
        <p>{planet.description}</p>
        <hr />
        <div className="travel-details">
          <div className="kelometer">
            <h3>AVG. DISTANCE</h3>
            <h4>{planet.distance}</h4>
          </div>
          <div className="days">
            <h3>EST. TRAVEL TIME</h3>
            <h4>{planet.travel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestCard;
