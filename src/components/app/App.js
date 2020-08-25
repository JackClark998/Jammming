import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'Money Machine', artist: '100 gecs', album: '1000 gecs', id: '001' },
                      {name: 'Through the Fire and the Flames', artist: 'DragonForce', album: 'Inhuman Rampage', id: '002' },
                      {name: 'Lush', artist: 'Four Tet', album: 'New Energy', id: '003' }]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
