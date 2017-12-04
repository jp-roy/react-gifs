import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="gif">
        <img className="selected-gif" src={`https://media2.giphy.com/media/${this.props.id}/200.gif`} alt=""/>
      </div>
    );
  }
}

export default Gif
