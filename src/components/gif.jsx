import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.show(this.props.id)
  }

  render() {
    return (
      <img className="gif" src={`https://media2.giphy.com/media/${this.props.id}/200.gif`} onClick={this.handleClick}/>
    );
  }
}

export default Gif
