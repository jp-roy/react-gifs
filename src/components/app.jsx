import React, { Component } from 'react';

import SearchBar from './search_bar.jsx'
import GifList from './gif_list.jsx'
import Gif from './gif.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: "RqbkeCZGgipSo",
      ids: ["vXeeHUPxgBtp6", "8EmeieJAGjvUI"]
    };
  }


  // State dans le constr
  // 1) selectedGifId
  // 2) Gif ids array

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList ids={this.state.ids}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App
