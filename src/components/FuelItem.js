import React, { useState } from "react";

const FuelItem = (props) => {
  const [menu, setMenu] = useState("false");
  const showMenu = () => {
    setMenu((prevMenu) => (prevMenu === "false" ? "true" : "false"));
    const overlay = document.querySelector(".menu-overlay");
    overlay.classList.add("active");
    overlay.addEventListener("click", (e) => {
      e.currentTarget.classList.remove("active");
      setMenu("false");
    });
  };
  return (
    <>
      <li className="fuel__item flex-row-center">
        <div className="fuel__item-wrapper flex-row-center">
          <div className="fuel__col flex-row-center">
            <div className="fuel__checkbox d-flex">
              <input
                type="checkbox"
                className="checkbox"
                name="checkbox"
                id="checkbox"
              />
            </div>
            <img
              src="./assets/images/fuel-avatar.svg"
              alt="fuel abbreaviation image"
            />
            <p>INA d.d.</p>
          </div>
          <div className="fuel__col">
            <p className="fuel-type">Autogas</p>
          </div>
          <div className="fuel__col">
            <p className="fuel-name">EURODIESEL</p>
          </div>
          <div className="fuel__col">
            <p className="fuel-price">{props.price}</p>
          </div>
          <div className="fuel__col">
            <p className="fuel-date">31/08/2020</p>
          </div>
        </div>
        <button
          tabIndex={0}
          className="fuel-menu-btn"
          aria-controls="fuel-menu"
          onClick={showMenu}
        >
          <img src="./assets/icons/more-icon.svg" alt="more icon" />
        </button>
        {/* fuel menu dropdown */}
        <div
          className="fuel-menu radius-6"
          aria-label="fuel menu dropdown"
          data-visible={menu}
          id="fuel-menu"
          aria-expanded={menu}
        >
          <ul className="fuel-menu__list d-grid">
            <li className="fuel-menu__item">
              <a href="#" className="fuel-menu__link flex-row-center">
                <img src="./assets/icons/edit-icon.svg" aria-hidden="true" />
                Edit Data
              </a>
            </li>
            <li className="fuel-menu__item">
              <a href="#" className="fuel-menu__link flex-row-center">
                <img src="./assets/icons/remove-icon.svg" aria-hidden="true" />
                Remove Data
              </a>
            </li>
            <li className="fuel-menu__item">
              <a href="#" className="fuel-menu__link flex-row-center">
                <img
                  src="./assets/icons/duplicate-icon.svg"
                  aria-hidden="true"
                />
                Duplicate Data
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default FuelItem;
