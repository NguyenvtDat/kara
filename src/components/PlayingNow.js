import React from "react";

function PlayingNow(props) {
  return (
    <div className="playingnow">
      <div className="playingnow-wrapper">
        <div className="playingnow-content">
          <h4 className="playingnow-title">{props.title}</h4>
          <p className="playingnow-singer">{props.singer}</p>
        </div>
        <div className="playingnow-control">
          <i
            className={props.isPlaying ? "ti-control-pause" : "ti-control-play"}
            onClick={props.changeIsPlaying}
          ></i>
          <i className="ti-control-skip-forward" onClick={props.nextSong}></i>
        </div>
      </div>
      <div className="vertical-line"></div>
    </div>
  );
}

export default PlayingNow;
