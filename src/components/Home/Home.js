import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeedsSourcePreview from '../FeedsSourcePreview';
import ContentTypes from '../../constants/ContentTypes';


class Home extends Component {
  render() {
    console.log('Content.render');
//    console.log(this.props.store.getState());
    console.log(this.props.Rss);
    return (
      <div>
        Home
        {
          this.props.children
          /*
          this.props.store.getState().Rss.content.previews.map((data,index) => {
            return( <FeedsSourcePreview key={index} state={data} /> );
          })*/
        }
        {this.props.Rss.info}
        <div className={s.text}>text</div>
      </div>
    );
  }
}

export default connect(state => (state))(Home);
