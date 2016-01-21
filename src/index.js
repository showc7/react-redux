import 'babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import Root from './root';

render(<Root />, document.getElementById('root'));
