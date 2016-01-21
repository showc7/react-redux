import React, { Component, PropTypes } from 'react';
import FeedsSourcePreview from '../FeedsSourcePreview';
import ContentTypes from '../../constants/ContentTypes';

export default class Home extends Component {
  render() {
    console.log('Content.render');
    console.log(this.props.store.getState());

    return (
      <div>
        {
          this.props.store.getState().Rss.content.previews.map((data,index) => {
            return( <FeedsSourcePreview key={index} state={data} /> );
          })
        }
      </div>
    );
  }
}
