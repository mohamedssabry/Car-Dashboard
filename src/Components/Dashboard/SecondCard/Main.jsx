import React from "react";
import "./Main.scss";
import RightCard from "./RightCard";
import LeftCard from "./LeftCard";

function Main() {
  return (
    <div className="main">
      <LeftCard />
      <RightCard />
    </div>
  );
}

export default Main;
