import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="header__logo-wrapper grid-center">
          <img src="./assets/icons/logo.svg" alt="logo illustration" />
        </div>
        <nav className="sidebar__nav">
          <ul className="sidebar__list d-grid">
            <li className="sidebar__item">
              <Link to={"/"} className="sidebar__link" title="Home">
                <img src="./assets/icons/aside-home.svg" aria-hidden="true" />
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to={"/List"} className="sidebar__link" title="Search list">
                <img src="./assets/icons/aside-search.svg" aria-hidden="true" />
              </Link>
            </li>
            <li className="sidebar__item">
              <a href="#" className="sidebar__link" title="Stats">
                <img src="./assets/icons/aside-stats.svg" aria-hidden="true" />
              </a>
            </li>
            <li className="sidebar__item">
              <a href="#" className="sidebar__link" title="User">
                <img src="./assets/icons/aside-user.svg" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
