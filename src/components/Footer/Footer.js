import React, { Component } from 'react';
import s from './Footer.scss';
import { home } from '../../actions/state/routes';

class Footer extends Component {

  handleClickHome() {
    home();
  }

  render() {
    console.log('Footer.render ' + JSON.stringify(this.props));
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© show</span>
          <span className={s.spacer}>·</span>
          <a className={s.link} href="/" onClick={this.handleClickHome}>Home</a>
        </div>
      </div>
    );
  }

}

export default Footer;
