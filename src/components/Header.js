import React from "react";

const Header = () => {
  return (
    <>
      <header className="header d-flex">
        <div className="col d-flex flex-row-center">
          <form>
            <div className="header__input-search d-flex">
              <img src="./assets/icons/search-icon.svg" aira-hidden="true" />
              <input
                type="search"
                name="search"
                id="search"
                className="search"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="col d-flex flex-row-center">
          <button className="header__notification-btn">
            <img
              src="./assets/icons/notification-icon.svg"
              aria-hidden="true"
            />
          </button>
          <button className="header__profile-btn">
            <img src="./assets/images/avatar.png" aria-hidden="true" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
