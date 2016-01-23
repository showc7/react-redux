import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import HomeSelectors from 'selectors/homeSelectors';
import HomeActions from 'actions/homeActions';

class Home extends Component {

    onIncrementClick = (event) => {
        HomeActions.incrementCounter();
    };

    onDecrementClick = (event) => {
        HomeActions.decrementCounter();
    };

    render() {
        return (
            <div className="home-container">
                <label>{HomeSelectors.homeLabel(this.props)}</label>
                <div>{HomeSelectors.homeCounter(this.props)}</div>
                <button onClick={this.onIncrementClick}>Increment</button>
                <button onClick={this.onDecrementClick}>Decrement</button>
            </div>
        );
    }
}

export default connect( HomeSelectors.home)(Home);