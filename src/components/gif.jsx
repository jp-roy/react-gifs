import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);

  }

  handleClick = (event) => {
    this.props.show(event.target.dataset.id)
  }

  render() {
    return (
      <div className="gif">
        <img src={`https://media2.giphy.com/media/${this.props.id}/200.gif`} onClick={this.handleClick} data-id={this.props.id}/>
      </div>
    );
  }
}

export default Gif
