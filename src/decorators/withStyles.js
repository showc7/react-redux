import React, { Component, PropTypes } from 'react';

function withStyles(...styles) {
  return (BaseComponent) => class StyledComponent extends Component {
    static propsTypes = {
      insertCss: PropTypes.func.isRequired,
    };

    componentWillMount() {
      console.log(this.props);
      this.removeCss = this.props.Rss.insertCss.apply(undefined, styles);
    }

    componentWillUnmount() {
      //this.removeCss();
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  };
}

export default withStyles;
