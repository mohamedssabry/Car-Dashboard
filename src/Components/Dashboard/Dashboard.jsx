import React from "react";
import "./Dashboard.scss";
import FirstCard from "./FirstCard/FirstCard";
import Main from "./SecondCard/Main";
import ThirdCard from "./ThirdCard/ThirdCard";

function Dashboard() {
  return (
    <div className="dash">
      <FirstCard />
      <Main />
      <ThirdCard />
    </div>
  );
}

export default Dashboard;
