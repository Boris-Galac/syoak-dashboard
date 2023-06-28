import React from "react";

const GasItem = (props) => {
  return (
    <>
      <li className="gas-item d-grid">
        <div className="gas-item__first-col flex-row-center">
          <span className={`gas-item__name ${props.className}`}>
            {props.abbr}
          </span>
          <p>{props.provider}</p>
        </div>
        <div className="gas-item__second-col flex-row-center">
          <img src="./assets/icons/location-icon.svg" alt="location icon" />
          <p>{props.city}</p>
        </div>
        <div className="gas-item__third-col flex-row-center">
          <button>
            <img src="./assets/icons/arrow-down-icon.svg" />
          </button>
        </div>
      </li>
    </>
  );
};

export default GasItem;
