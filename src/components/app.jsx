import React, { Component } from 'react';
import giphy from "giphy-api";

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

    this.search("csgo");
  }

  search = (query) => {
    giphy('AQxTgeGrIHzd6KGpF6id1Wi4wJgbnb61').search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      console.log(res);
      // update state
      this.setState({
        ids: res.data.map((gif) => gif.id)
      });
    });
  }

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
