import React from "react";

const Message = () => {
  return (
    <>
      <li className="message d-flex">
        <div className="message__first-col">
          <img src="./assets/images/avatar-msg.png" alt="avatar image" />
        </div>
        <div className="message__second-col d-grid">
          <h3>Jessica Smith</h3>
          <p>Good Morning</p>
        </div>
        <div className="message__third-col">
          <span>32MIN</span>
        </div>
      </li>
    </>
  );
};

export default Message;
