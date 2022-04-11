import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Home;
