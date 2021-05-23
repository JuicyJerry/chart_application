import React from "react";
import LinearChart from "./component/LinearChart.js";
import HighchartsTable from "./component/HighchartsTable";

const App = () => (
  <div className="App">
    <LinearChart />
    <div className="legendArea"></div>
    <HighchartsTable />
  </div>
);

export default App;
