import React from "react";
import "./App.css";
import LeftSideBar from "./heejin/leftSideBar";
import Feed from "./heejin/Feed";

function App() {
  return (
    <div className="app">
      <LeftSideBar />
      <Feed />
    </div>
  );
}

export default App;
