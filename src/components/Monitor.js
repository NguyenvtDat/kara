import React from "react";
import AudioControl from "./AudioControl";
import Lyrics from "./Lyrics";

function Monitor() {
  return (
    <div className="monitor">
      <AudioControl />
      <Lyrics />
    </div>
  );
}

export default Monitor;
