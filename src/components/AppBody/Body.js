import React from "react";
import "./Body.css";
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";

function Body() {
  return (
    <div className="body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default Body;
