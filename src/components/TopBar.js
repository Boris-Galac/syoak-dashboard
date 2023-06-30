import React from "react";

const TopBar = () => {
  const editMenu = (e) => {
    document.querySelector(".edit-menu").classList.add("active");
    const overlay = document.querySelector(".menu-overlay");
    overlay.classList.add("active");
    overlay.addEventListener("click", (e) => {
      e.currentTarget.classList.remove("active");
      document.querySelector(".edit-menu").classList.remove("active");
    });
  };
  return (
    <>
      <div className="top-bar d-flex mb-64">
        <div className="top-bar__col top-bar__left--col d-flex">
          <div className="left-col__wrapper left-col__wrapper--first d-flex">
            <h2 className="datalist__heading">Datalist</h2>{" "}
            <span>578 total</span>
          </div>
          <div className="left-col__wrapper left-col__wrapper--second d-flex">
            <p>Sort by:</p>
            <button className="fuel-type-btn flex-row-center">
              Fuel Type
              <img
                src="./assets/icons/top-bar-down-arrow-icon.svg"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <div className="top-bar__col top-bar__right--col d-flex">
          <button className="filter-btn">
            <img src="./assets/icons/filter-icon.svg" aria-hidden="true" />
            Filter
          </button>
          <button className="add-btn primary--btn" onClick={editMenu}>
            <img src="./assets/icons/add-icon.svg" aria-hidden="true" />
            Add Fuel
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
