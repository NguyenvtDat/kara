export function PlayingNowNextSong(id) {
  return {
    type: "NEXT_SONG",
    payload: { id },
  };
}
