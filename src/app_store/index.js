import { createStore, compose } from 'redux';
import reducer from './reducer';

// pass to compose middleware with logger for example

export default compose()(createStore)(reducer);
