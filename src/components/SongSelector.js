import React from 'react';

const SongSelector = (props) => {
  const options = props.songs.map(song => {
    return <option value={song.id} key={song.id}>{song.name}</option>
  })

  function handleChange(event) {
    props.onSongSelected(event.target.value);
  }

  return (
    <select id="song-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a song...</option>
      {options}
    </select>
  )
}

export default SongSelector;