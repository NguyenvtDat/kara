import React from "react";
import SidebarNav from "./SidebarNav";
import SidebarSuggestion from "./SidebarSuggestion";
import SidebarSongs from "./SidebarSongs";
import SidebarItems from "./SidebarItems";
import logo from "../img/logo/logo.svg";
import Playlist from "../img/playlist/playlist";
import Genres from "../img/genres/genres";
import NewRelease from "../img/newrelease/newrelease";
import Top from "../img/top/top";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="general--content">
        <SidebarSuggestion />
        <SidebarSongs />
        <SidebarItems content={Playlist} />
        <SidebarItems content={Genres} />
        <SidebarItems content={Top} />
        <SidebarItems content={NewRelease} />
        <div class="content--note-container">
          <p className="content--note">
            The names of the original artists are given for reference only. All
            musical material on this website is re-recorded and does not use in
            any form the original music or original vocals or any feature of the
            original recording.
          </p>
        </div>
      </div>
      <SidebarNav />
    </div>
  );
}

export default Sidebar;
