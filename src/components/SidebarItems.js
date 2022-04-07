import React from "react";

function SidebarItems(props) {
  const displayItems = props.content.content.map((song, index) => (
    <img key={index} className="sidebar--item-content" src={song.img} />
  ));
  return (
    <div className="sidebar--items container">
      <div className="sidebar--title">
        <span className="sidebar--title-context">{props.content.name}</span>
        <i className="ti-angle-right"></i>
      </div>
      <div className="sidebar--content-container">{displayItems}</div>
    </div>
  );
}

export default SidebarItems;
