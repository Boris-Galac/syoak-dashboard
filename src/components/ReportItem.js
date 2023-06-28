import React from "react";

const ReportItem = (props) => {
  return (
    <>
      <li className="aside-report-item ">
        <span className="aside-report-item__num">{props.id}</span>
        <span className="aside-report-item__heading">{props.provider}</span>
        <span className="aside-report-item__stat">$1.58 (+2.1%)</span>
      </li>
    </>
  );
};

export default ReportItem;
