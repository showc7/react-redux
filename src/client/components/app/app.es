import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './_app.scss';

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <div>App</div>
                {this.props.children}
            </div>
        );
    }
}

export default connect(state => (state))(App);
