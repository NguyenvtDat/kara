import React from "react";
import SongTemplate from "./SongTemplate";
import Songs from "../img/songs/songs";

function SidebarSongs() {
  const songList = Songs.map((song) => (
    <SongTemplate
      key={song.id}
      id={song.id}
      img={song.img}
      title={song.title}
      singer={song.singer}
      duration={song.duration}
    />
  ));
  const numberOfColumn = Math.ceil(songList.length / 3);
  const [positionOfSongList, setPositionOfSongList] = React.useState(0);
  function slideLeft() {
    if (positionOfSongList > -numberOfColumn + 1)
      setPositionOfSongList((prev) => prev - 1);
  }
  function slideRight() {
    if (positionOfSongList < 0) setPositionOfSongList((prev) => prev + 1);
  }

  React.useEffect(() => {
    document.querySelector(".sidebar--songs").style.transform =
      "translateX(" + positionOfSongList * 320 + "px)";
  }, [positionOfSongList]);

  return (
    <div>
      <div className="sidebar--suggestion">
        <i
          className={`ti-angle-left ${
            positionOfSongList == -numberOfColumn + 1 ? "disable" : ""
          }`}
          onClick={slideLeft}
        ></i>
        <span>Suggestions</span>
        <i
          className={`ti-angle-right ${
            positionOfSongList == 0 ? "disable" : ""
          }`}
          onClick={slideRight}
        ></i>
      </div>
      <div className="sidebar--songs-wrapper">
        <div className="sidebar--songs container">{songList}</div>
      </div>
    </div>
  );
}

export default SidebarSongs;
