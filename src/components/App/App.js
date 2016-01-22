import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';

import './App.scss';

class App extends React.Component {

  render() {
    console.log('App.render()');
    console.log(JSON.stringify(this.context));
//    console.log(this.props);
    return (
      <div className="text">
        <div>App</div>
        <Link to={`/home`}>link</Link>
        {/*this.props.children*/}
      </div>
    );
  }
}

export default connect(state => (state))(App);
