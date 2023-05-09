import React from "react";
import NavBarA from "../components/NavBarA";
import './Analytics.css'

function Analytics () {
  return (
    <div>
      <NavBarA />
      <div className="board">
        <iframe
          height={1000}
          width={1200}
          src="https://datastudio.google.com/embed/reporting/cbab2ed0-5c57-44ea-b219-f4dfd6bb877b/page/MxypC"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Analytics;
