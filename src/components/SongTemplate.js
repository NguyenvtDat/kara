import React from "react";
import SongModal from "./SongModal";
import { useDispatch, useSelector } from "react-redux";
import { addToQueueStore } from "../actions/queue";
import { PlayingNowNextSong } from "../actions/playnow";
import { Paused, Played } from "../actions/isplaying";
function SongTemplate(props) {
  const dispatch = useDispatch();
  const [showSongModal, setShowSongModal] = React.useState(false);
  const ref = React.useRef();
  useOnClickOutside(ref, () => setShowSongModal(false));
  function showModal() {
    setShowSongModal(true);
  }

  function addToQueue() {
    const song = {
      id: props.id,
      title: props.title,
      singer: props.singer,
      duration: props.duration,
    };
    const action = addToQueueStore(song);
    dispatch(action);
  }

  function playNow() {
    const action1 = PlayingNowNextSong(props.id);
    const action2 = Paused();
    dispatch(action1);
    dispatch(action2);
  }
  return (
    <div className="sidebar--song" key={props.id} onClick={showModal} ref={ref}>
      <div className="song-wraper">
        <img className="song--img" src={props.img} />
        <div className="song--info">
          <h4 className="song--title">{props.title}</h4>
          <p className="song--singer">{props.singer}</p>
        </div>
        <i className="ti-more-alt"></i>
      </div>
      {showSongModal && <SongModal addToQueue={addToQueue} playNow={playNow} />}
      <hr></hr>
    </div>
  );
  function useOnClickOutside(ref, handler) {
    React.useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
}

export default SongTemplate;
