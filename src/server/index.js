'use strict';

import 'babel-core/register';

delete process.env.BROWSER;

import app from './app.js';
app.start();
