import React from "react";
import "./App.css";
import LeftSideBar from "./heejin/leftSideBar";
import Feed from "./heejin/Feed";
import RightSideBar from "./zmin/RightSideBar";

function App() {
  return (
    <div className="app">
      <LeftSideBar />
      <Feed />
      <RightSideBar/>
    </div>
  );
}

export default App;
