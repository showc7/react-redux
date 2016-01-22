import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Link from 'react-router';

//import { about } from '../../actions/state/routes';

class Navigation extends Component {

  render() {
    console.log('Navigation.render props: ' + JSON.stringify(this.props));
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <a className={s.link} onClick={Link.handleClick} href="/about">About</a>
        <span className={s.spacer}> | </span>
        <a className={s.link} onClick={Link.handleClick} href="/contact">Contact</a>
        <span className={s.spacer}> | </span>
        <a className={s.link} onClick={Link.handleClick} href="/feed/8">test</a>
        {/*<span className={s.spacer}> | </span>
        <a className={s.link} href="/login" onClick={Link.handleClick}>Log in</a>
        <span className={s.spacer}>or</span>
        <a className={cx(s.link, s.highlight)} href="/register" onClick={Link.handleClick}>Sign up</a>*/}
      </div>
    );
  }

}

export default Navigation;
