import React from "react";
import PlayingNow from "./PlayingNow";
import QueuingNow from "./QueuingNow";
import EmptySong from "./EmptySong";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQueuePositionStore,
  removeFromQueueStore,
} from "../actions/queue";
import { PlayingNowNextSong } from "../actions/playnow";
import { Paused, Played } from "../actions/isplaying";

function SongQueue() {
  const playingNow = useSelector((state) => state.playnow);
  const queueList = useSelector((state) => state.queue);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();
  let totalDuration = playingNow.duration;
  function removeFromQueue(queueId) {
    const actions = removeFromQueueStore(queueId);
    dispatch(actions);
  }
  function changeQueuePosition(queueId) {
    const actions = changeQueuePositionStore(queueId);
    dispatch(actions);
  }
  function nextSong() {
    const action1 = PlayingNowNextSong(queueList[0].id);
    const action2 = removeFromQueueStore(queueList[0].queueId);
    dispatch(action1);
    dispatch(action2);
    dispatch(Paused());
  }
  function changeIsPlaying() {
    let action;
    if (isPlaying) action = Paused();
    else action = Played();

    dispatch(action);
  }
  const renderQueue = queueList.map((song) => {
    totalDuration += song.duration;
    return (
      <QueuingNow
        queueId={song.queueId}
        id={song.id}
        key={song.queueId}
        title={song.title}
        singer={song.singer}
        removeFromQueue={removeFromQueue}
        changeQueuePosition={changeQueuePosition}
      />
    );
  });
  let totalMin = Math.floor(totalDuration / 60);
  let totalSecond = totalDuration - totalMin * 60;

  return (
    <div className="song-queue">
      <div>
        <span className="song-queue--total">{renderQueue.length + 1}</span>
        <span>Song Queue -- </span>
        <span className="song-total-time">
          {totalMin}:{totalSecond}
        </span>
        <span> mins</span>
      </div>
      <div className="playing-list">
        <PlayingNow
          title={playingNow.title}
          singer={playingNow.singer}
          nextSong={nextSong}
          changeIsPlaying={changeIsPlaying}
          isPlaying={isPlaying}
        />
        {renderQueue}
        <EmptySong />
      </div>
    </div>
  );
}

export default SongQueue;
