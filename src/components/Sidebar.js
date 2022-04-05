import React from "react";
import SidebarNav from "./SidebarNav";
import SidebarSuggestion from "./SidebarSuggestion";
import SidebarSongs from "./SidebarSongs";
import logo from "../img/logo.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--logo">
        <img src={logo} alt="logo" />
      </div>
      <SidebarSuggestion />
      <SidebarNav />
      <SidebarSongs />
    </div>
  );
}

export default Sidebar;
