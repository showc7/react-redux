import React, { Component, PropTypes } from 'react';

export default class FeedPreview extends Component{

  render() {
    return (
      <div>
        <div> {this.props.text} </div>
        <a href={ this.props.url }></a>
      </div>
    );
  }
}
