import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

class SongContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSongId: ''
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/all/100/explicit.json';

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({ songs: songs }))
      .catch(err => console.error);
  }

  handleSongSelected(id) {
    this.setState({ selectedSongId: id })
  }

  render() {
    const selectedSong = this.state.songs.find(song => song.id === this.state.selectedSongId)
    
    return (
      <div>
        <h2>Top Songs</h2>
        <SongSelector songs={this.state.songs} onSongSelected={this.handleSongSelected} />
        <SongDetail song={selectedSong} />
      </div>
    );
  }
}

export default SongContainer;