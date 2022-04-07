import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function lyricsToArray(lyrics) {
  if (lyrics) {
    const lines = lyrics.split(" ");
    return lines;
  }
  return [];
}
let first = "";
let second = "";
let timer = null;
function Lyrics() {
  const playingNow = useSelector((state) => state.playnow);
  const isPlaying = useSelector((state) => state.isPlaying);
  const lyrics = lyricsToArray(playingNow.lyrics);
  const filtered = lyrics.filter((word) => word != "");
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    if (isPlaying)
      timer = setInterval(() => {
        setCurrentWord((prev) => prev + 1);
      }, 500);
    else clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    setCurrentWord(0);
  }, [playingNow]);

  useEffect(() => {
    first = filtered.slice(0, currentWord).join(" ");
    second = filtered.slice(currentWord).join(" ");
  }, [currentWord]);

  return (
    <div className="lyrics-wrapper">
      <div>
        <p>
          <span className="highlighted">{first}</span> <span>{second}</span>
        </p>
      </div>
    </div>
  );
}

export default Lyrics;
