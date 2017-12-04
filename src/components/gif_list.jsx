import React, { Component } from 'react';

import Gif from './gif.jsx'

class GifList extends Component {
  render() {
    return (
      this.props.ids.map((id, key) => <Gif show={this.props.show} id={id} key={id}/> )
    );
  }
}

export default GifList
