import React, { Component } from 'react';

import Gif from './gif.jsx'

class GifList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.ids.map((id, key) => <Gif id={id} key={id}/> )
    );
  }
}

export default GifList
