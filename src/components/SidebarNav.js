import React from "react";

function SidebarNav() {
  return (
    <div className="sidebar--nav">
      <div className="nav--icon">
        <i className="icon ti-home"></i>Home
      </div>
      <div className="nav--icon">
        <i className="icon ti-search"></i>Search
      </div>
      <div className="nav--icon">
        <i className="icon ti-star"></i>My songs
      </div>
      <div className="nav--icon">
        <i className="icon ti-rss-alt"></i>Remote control
      </div>
      <div className="nav--icon">
        <i className="icon ti-settings"></i>Settings
      </div>
    </div>
  );
}

export default SidebarNav;
