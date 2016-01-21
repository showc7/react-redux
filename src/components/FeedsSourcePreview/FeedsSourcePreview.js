import React, { Component, PropTypes } from 'react';
import { feed } from '../../actions/state/routes';

export default class FeedsSourcePreview extends Component{

  handleClick() {
    console.log('FeedsSourcePreview.handleClick');
    console.log(this.props.state);
    feed(this.props.state);
  }

  render() {
    console.log('FeedsSourcePreview.render this.props: ' + JSON.stringify(this.props));
    return (
      <div onClick={ this.handleClick.bind(this) }>
        <div>{ this.props.state }</div>
      </div>
    );
  }
}
