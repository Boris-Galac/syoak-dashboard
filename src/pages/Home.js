import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ReportItem from "../components/ReportItem";
import { salesReport, gasData } from "../data.js";
import ActivitiItem from "../components/ActivitiItem";
import GasItem from "../components/GasItem";
import Message from "../components/Message";

const Home = () => {
  const reportItems = salesReport.map((item) => {
    return <ReportItem id={item.id} provider={item.provider} />;
  });
  const gasItems = gasData.map((item) => {
    return (
      <GasItem
        abbr={item.abbr}
        className={item.className}
        provider={item.provider}
        city={item.city}
      />
    );
  });
  return (
    <>
      <div className="dashboard d-grid">
        <Header />
        <Sidebar />
        <main className="main">
          {/* TOP ROW */}
          <div className="top__row mb-32">
            <div className="row first-row d-flex">
              <div className="first-cube radius-6">
                <div className="first-cube__header p-16">
                  <h2 className="first-cube__heading">Diesel Fuel</h2>
                  <h3>$1.96</h3>
                  <span>AVG PRICE</span>
                </div>
                <img src="./assets/images/graph-line.svg" alt="graph line" />
                <div className="first-cube__months p-16">
                  <span className="month">JAN</span>
                  <span className="month">FEB</span>
                  <span className="month">MAR</span>
                  <span className="month">APR</span>
                  <span className="month">MAY</span>
                  <span className="month">JUN</span>
                  <span className="month">JUL</span>
                </div>
              </div>
              <div className="cube radius-10 p-16">
                <div className="cube__header">
                  <h2 className="cube__heading">Motor Gasoline</h2>
                  <h3>$1.58</h3>
                </div>
                <div>
                  <span>AVG PRICE</span>
                  <div className="cube__percent green">
                    <img
                      src="./assets/icons/arrow-down-green.svg"
                      alt="arrow down"
                    />
                    -6%
                  </div>
                </div>
              </div>
              <div className="cube radius-10 p-16">
                <div className="cube__header">
                  <h2 className="cube__heading">Autogas</h2>
                  <h3>$0.98</h3>
                </div>
                <div>
                  <span>AVG PRICE</span>
                  <div className="cube__percent red">
                    <img
                      src="./assets/icons/arrow-down-red.svg"
                      alt="arrow down"
                    />
                    -2%
                  </div>
                </div>
              </div>
              <div className="cube radius-10">
                <div className="cube__header">
                  <h2 className="cube__heading">Fuel Oil</h2>
                  <h3>$0.74</h3>
                </div>
                <div>
                  <span>AVG PRICE</span>
                  <div className="cube__percent red">
                    <img
                      src="./assets/icons/arrow-down-red.svg"
                      alt="arrow down"
                    />
                    -2%
                  </div>
                </div>
              </div>
            </div>
            <div className="row second-row radius-6">
              <h2 className="second-row__heading">Price Statistics</h2>
              <div className="second-row__inner-wrapper flex-row-center">
                <div className="second-row__graph-lines__wrapper d-grid">
                  <div className="second-row__graph-lines d-flex">
                    <div className="graph">
                      <div className="graph__line">
                        <img
                          src="./assets/images/graph-line-1.svg"
                          alt="graph line"
                        />
                      </div>
                      <span className="graph__label">Q1</span>
                    </div>
                    <div className="graph">
                      <div className="graph__line">
                        <img src="./assets/images/graph.svg" alt="graph line" />
                      </div>
                      <span className="graph__label">Q2</span>
                    </div>
                    <div className="graph">
                      <div className="graph__line">
                        <img
                          src="./assets/images/graph-1.svg"
                          alt="graph line"
                        />
                      </div>
                      <span className="graph__label">Q3</span>
                    </div>
                    <div className="graph">
                      <div className="graph__line">
                        <img
                          src="./assets/images/graph-2.svg"
                          alt="graph line"
                        />
                      </div>
                      <span className="graph__label grid__label--year">
                        2021
                      </span>
                    </div>
                    <div className="graph">
                      <div className="graph__line">
                        <img
                          src="./assets/images/graph-3.svg"
                          alt="graph line"
                        />
                      </div>
                      <span className="graph__label">Q5</span>
                    </div>
                    <div className="graph">
                      <div className="graph__line">
                        <img
                          src="./assets/images/graph-4.svg"
                          alt="graph line"
                        />
                      </div>
                      <span className="graph__label">Q6</span>
                    </div>
                    <div className="graph">
                      <div className="graph__line">
                        <img
                          src="./assets/images/graph-5.svg"
                          alt="graph line"
                        />
                      </div>
                      <span className="graph__label">Q1</span>
                    </div>
                  </div>
                  <div className="price-stats__wrapper d-flex">
                    <div className="price-stats d-flex">
                      <div className="price-stats__name price-stats__circle price-stats__name--blue-green">
                        <span>C</span>
                      </div>
                      <div className="price-stats__body d-flex">
                        <div className="price-stats__header ">
                          <h4>CHEVRON</h4>
                          <span className="price-stats__price">$1.80</span>
                        </div>
                        <div className="cube__percent green price-stats--font-size">
                          <img
                            src="./assets/icons/arrow-down-green.svg"
                            alt="arrow down"
                          />
                          -6%
                        </div>
                      </div>
                    </div>
                    <div className="price-stats d-flex">
                      <div className="price-stats__name price-stats__circle price-stats__name--red">
                        <span>S</span>
                      </div>
                      <div className="price-stats__body d-flex">
                        <div className="price-stats__header ">
                          <h4>SHELL</h4>
                          <span className="price-stats__price">$1.92</span>
                        </div>
                        <div className="cube__percent green price-stats--font-size">
                          <img
                            src="./assets/icons/arrow-down-green.svg"
                            alt="arrow down"
                          />
                          -11%
                        </div>
                      </div>
                    </div>
                    <div className="price-stats d-flex">
                      <div className="price-stats__name price-stats__circle price-stats__name--yellow">
                        <span>T</span>
                      </div>
                      <div className="price-stats__body d-flex">
                        <div className="price-stats__header ">
                          <h4>TOTAL</h4>
                          <span className="price-stats__price">$1.88</span>
                        </div>
                        <div className="cube__percent green price-stats--font-size">
                          <img
                            src="./assets/icons/arrow-down-green.svg"
                            alt="arrow down"
                          />
                          -6%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="oil-pipe-action grid-center">
                  <img
                    src="./assets/images/oil-pipe.svg"
                    alt="oil pipe image"
                  />
                  <div className="oil-pipe-cta grid-center">
                    <p>
                      Find the best gas prices in your state to maximize savings
                      at the pump.
                    </p>
                    <button className="oil-pipe-cta-btn primary--btn">
                      Find prices
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aside-row">
              <h2 className="sales-report__heading">Sales Report</h2>
              <div className="aside-table">
                <div className="aside-table__label-row d-flex">
                  <span className="aside-table__label">#</span>
                  <span className="aside-table__label">PROVIDER</span>
                  <span className="aside-table__label">STATS</span>
                </div>
                <ul className="aside-table__row">{reportItems}</ul>
              </div>
            </div>
          </div>
          {/* BOTTOM ROW */}
          <div className="bottom__row">
            <section className="gas radius-10">
              <h2 className="mb-40">Oil & Gas Providers</h2>
              <ul className="gas__list">{gasItems}</ul>
            </section>
            <section className="activity radius-10">
              <div className="activity__heading-wrapper d-flex mb-40">
                <h2>Activity</h2>
                <p>this month</p>
              </div>
              <ul className="activity__list d-grid">
                <ActivitiItem />
                <ActivitiItem />
                <ActivitiItem />
                <ActivitiItem />
              </ul>
            </section>
            <section className="messages">
              <h2 className="mb-40">Messages</h2>
              <div className="messages__wrapper">
                <ul className="messages__list d-grid">
                  <Message />
                  <Message />
                  <Message />
                  <Message />
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
