import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="home">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Home;
