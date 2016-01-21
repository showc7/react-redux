import React, { PropTypes, Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props);
    return (
        <div className="app-container">
          {"app here"}
        </div>
    );
  }

  someHandler(event) {
    // const { dispatch } = this.props;
    // const actions = bindActionCreators(AuthActions, dispatch);

    // actions.someAction('some param');
  }
}

// selector should be here
export default connect(state => (state))(App);
