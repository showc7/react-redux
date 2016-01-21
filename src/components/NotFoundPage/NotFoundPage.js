import React, { Component, PropTypes } from 'react';
import s from './NotFoundPage.scss';

const title = 'Page Not Found';

class NotFoundPage extends Component {

  render() {
    return (
      <div>
        <h1>{title}</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    );
  }

}

export default NotFoundPage;
