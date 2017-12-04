import React, { Component } from 'react';
import giphy from "giphy-api";

import SearchBar from './search_bar.jsx'
import GifList from './gif_list.jsx'
import Gif from './gif.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: "",
      ids: []
    };

    this.search("csgo");
  }

  search = (query) => {
    giphy('AQxTgeGrIHzd6KGpF6id1Wi4wJgbnb61').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        selectedGifId: res.data[0].id,
        ids: res.data.map((gif) => gif.id)
      });
    });
  }

  show = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList ids={this.state.ids} show={this.show}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App
