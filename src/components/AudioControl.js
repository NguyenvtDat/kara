import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paused, Played } from "../actions/isplaying";
import { PlayingNowNextSong } from "../actions/playnow";
import { removeFromQueueStore } from "../actions/queue";
let mouseDownOnSlider = false;
function AudioControl() {
  const audioEl = useRef(null);
  const progressEl = useRef(null);
  const queueList = useSelector((state) => state.queue);
  const playingNow = useSelector((state) => state.playnow);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();
  const [progressbar, setProgressbar] = useState(0);
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    dispatch(Played());
    setProgressbar(0);
  }, [playingNow]);

  useEffect(() => {
    dispatch(Paused());
    audioEl.current.addEventListener("timeupdate", () => {
      if (!mouseDownOnSlider) {
        setProgressbar(
          (audioEl.current.currentTime / audioEl.current.duration) * 100
        );
      }
    });
  }, []);

  useEffect(() => {
    if (audioEl && audioEl.current)
      audioEl.current.addEventListener(
        "ended",
        () => {
          dispatch(Paused());
          nextSong();
        },
        false
      );
  });

  function changeIsPlaying() {
    let action;
    if (isPlaying) action = Paused();
    else action = Played();
    dispatch(action);
  }
  function nextSong() {
    const action1 = PlayingNowNextSong(queueList[0].id || null);
    const action2 = removeFromQueueStore(queueList[0].queueId);
    dispatch(action1);
    dispatch(action2);
  }
  return (
    <div>
      <audio src={playingNow.url} ref={audioEl}></audio>
      <div className="audio-controller">
        <i
          onClick={changeIsPlaying}
          className={`control-icon ${
            isPlaying ? "ti-control-pause" : "ti-control-play"
          }`}
        ></i>

        <input
          className="audio-progressbar"
          type="range"
          min="1"
          max="100"
          value={progressbar || 0}
          ref={progressEl}
          onChange={() => {}}
        />

        <i
          onClick={nextSong}
          className="control-icon ti-control-skip-forward"
        ></i>
      </div>
    </div>
  );
}

export default AudioControl;
