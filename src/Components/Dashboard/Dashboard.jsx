import React from "react";
import "./Dashboard.scss";
import FirstCard from "./FirstCard/FirstCard";
import Main from "./SecondCard/Main";

function Dashboard() {
  return (
    <div className="dash">
          <FirstCard />
          <Main/>
    </div>
  );
}

export default Dashboard;
