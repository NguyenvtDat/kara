import React from "react";

function SongModal(props) {
  return (
    <div className="songmodal--wrapper">
      <div className="songmodal--content">
        <div className="songmodal--row" onClick={props.playNow}>
          <i className="ti-control-play"></i>
          <span className="songmodal--element">Play Now</span>
        </div>
        <div className="songmodal--row" onClick={props.addToQueue}>
          <i className="ti-list"></i>
          <span className="songmodal--element">Add to queue</span>
        </div>
        <div className="songmodal--row">
          <i className="ti-info-alt"></i>
          <span className="songmodal--element">Show credits</span>
        </div>
      </div>
    </div>
  );
}

export default SongModal;
