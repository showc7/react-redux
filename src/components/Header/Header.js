import React, { Component, PropTypes } from 'react';
import s from './Header.scss';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    console.log('Header.render store: ' + JSON.stringify(this.props));
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav} store={this.props.store}/>
          <a className={s.brand} href="/">
            {/*<img src={require('./logo-small.png')} width="38" height="38" alt="React" />*/}
            <span className={s.brandTxt}>RssLight</span>
          </a>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>RssLight</h1>
            <p className={s.bannerDesc}>simple rss reader for the web</p>
          </div>
        </div>
      </div>
    );
  }
/*
  render() {
    return(
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav}/>
        </div>
      </div>
    );
  }
  */
}

export default Header;
