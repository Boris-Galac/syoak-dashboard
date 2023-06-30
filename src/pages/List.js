import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Pagination from "../components/Pagination";
import FuelItem from "../components/FuelItem";
import EditMenu from "../components/EditMenu";
import { fuelData } from "../data";

const List = () => {
  const fuelItems = fuelData.map((obj) => {
    return <FuelItem price={obj.price} />;
  });

  return (
    <>
      <div className="dashboard d-grid">
        <Header />
        <Sidebar />
        <main className="main">
          <section className="datalist">
            <TopBar />
            <div className="list">
              <div className="list__label-bar d-flex">
                <div className="list__label-bar-wrapper d-flex">
                  <p className="list__label-heading">Provider</p>
                  <p className="list__label-heading">Fuel Type</p>
                  <p className="list__label-heading">Fuel Name</p>
                  <p className="list__label-heading">Price</p>
                  <p className="list__label-heading">Date Created</p>
                </div>
                <Pagination />
              </div>
            </div>
            <ul className="fuel__list">{fuelItems}</ul>
          </section>
        </main>
      </div>
      <div className="menu-overlay"></div>
      <EditMenu />
    </>
  );
};

export default List;
