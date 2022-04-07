import React from "react";

function QueuingNow(props) {
  return (
    <div className="playingnow-wrapper">
      <div className="playingnow-content">
        <h4 className="playingnow-title">{props.title}</h4>
        <p className="playingnow-singer">{props.singer}</p>
      </div>
      <div className="playingnow-control">
        <i
          className="ti-control-skip-backward"
          onClick={() => {
            props.changeQueuePosition(props.queueId);
          }}
        ></i>
        <i
          className="ti-trash"
          onClick={() => {
            props.removeFromQueue(props.queueId);
          }}
        ></i>
      </div>
    </div>
  );
}

export default QueuingNow;
