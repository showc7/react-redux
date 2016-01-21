import React, { Component, PropTypes } from 'react';
import styles from './App.scss';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';

export default class App extends React.Component {

  render() {
    console.log('App.render()');
    console.log(this.props);
    return (
      <div> {JSON.stringify(this.props)} </div>
    );
  }
}
