import React from "react";

const EditMenu = () => {
  return (
    <>
      <div className="edit-menu">
        <h2 className="edit-menu__heading">Add Fuel</h2>
        <div className="edit-menu__wrapper d-grid">
          <div className="input__wrapper">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Provider Name"
            />
          </div>
          <div className="input__wrapper input__wrapper--dropdown">
            <input type="text" name="name" id="name" placeholder="Fuel Type" />
            <img src="./assets/icons/dropdown-icon.svg" aria-hidden="true" />
          </div>
          <div className="input__wrapper">
            <input
              type="text"
              name="fuel-name"
              id="fuel-name"
              placeholder="Fuel Name"
            />
          </div>
          <div className="input__wrapper">
            <p>Price</p>
            <div className="input__inner-wrapper d-flex">
              <input type="number" name="number" id="number" placeholder="1" />
              <span>.</span>
              <input type="number" name="number" id="number" placeholder="00" />
            </div>
          </div>
          <div className="input__btn-wrapper d-flex">
            <button className="primary--btn">Save Changes</button>
            <button className="secondary--btn">Preview</button>
            <button className="tertiary-btn">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMenu;
