import React from "react";

const ActivitiItem = () => {
  return (
    <>
      <li className="activity__item flex-row-center">
        <div className="activity-item__first-col flex-row-center">
          <span className="activity__time">16:38</span>
          <img src="./assets/icons/activity-icon.svg" alt="activity icon" />
        </div>
        <div className="activity-item__second-col d-grid">
          <p>Updated List</p>
          <p>John Doe</p>
        </div>
        <div className="activity-item__third-col d-flex">
          <p>Price change</p>
        </div>
      </li>
    </>
  );
};

export default ActivitiItem;
