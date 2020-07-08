import React from "react";
import Song from "./Song";

const SongList = ({ songs }) => {
  const songNodes = songs.map(song => {
    return (
      <Song author={song.author} key={song.id}>
        {song.text}
      </Song>
    );
  });

  return (
    <ul className="song-list">
      {songNodes}
    </ul>
  );
}

export default SongList;