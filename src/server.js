
import 'babel-core/polyfill';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Router from './routes';
//import Html from './components/Html';
import assets from './assets';
import { port } from './config';
import App from './components/App';

const server = global.server = express();

// register Node.js middleware
//server.use(express.static(path.join(__dirname, 'public')));

// register API middleware
server.use('/api/content', require('./api/content'));

server.get('*', (req, res, next) => {
  let Rhtml = '<html class="no-js" lang=""><head><meta charset="utf-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><title></title><meta name="description" content=""/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="apple-touch-icon" href="apple-touch-icon.png"/><style id="css"></style></head><body><div id="app"></div><script src="' + 'main.js' + '"></script><script>(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;e=o.createElement(i);r=o.getElementsByTagName(i)[0];e.src=\'https://www.google-analytics.com/analytics.js\';r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));ga(\'create\',\'UA-XXXXX-X\',\'auto\');ga(\'send\',\'pageview\');</script></body></html>';
  res.send(Rhtml);
});

/*
// register server-side renderring middleware
server.get('/', async (req, res, next) => {

  console.log('get /');
  Rhtml = '<html class="no-js" lang=""><head><meta charset="utf-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><title></title><meta name="description" content=""/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="apple-touch-icon" href="apple-touch-icon.png"/><style id="css"></style></head><body><div id="app"></div><script src="' + 'main.js' + '"></script><script>(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;e=o.createElement(i);r=o.getElementsByTagName(i)[0];e.src=\'https://www.google-analytics.com/analytics.js\';r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));ga(\'create\',\'UA-XXXXX-X\',\'auto\');ga(\'send\',\'pageview\');</script></body></html>';
  //res.send('<!doctype html>\n' + Rhtml);
  //res.send(ReactDOM.renderToStaticMarkup(React.createElement('div', {className: "commentBox"}, "Hello, world! I am a CommentBox.")));
  //res.send('hi');
  res.render('index',{ title: 'Hey', message: 'hi'});
  return;

  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '', entry: assets.main.js };
    const css = [];
    const context = {
      insertCss: styles => css.push(styles._getCss()),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    await Router.dispatch({ path: req.path, query: req.query, context }, (state, component) => {
      console.log(`state: ${state}`);
      console.log(state);
      console.log(`component: ${component}}`);
      console.log(component);
      data.body = ReactDOM.renderToString(component.children);
      data.css = css.join('');
    });

    //data.body = ReactDOM.renderToString(new App());
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    console.log(html);
    //const html = ReactDOM.renderToStaticMarkup(<Html />);
    res.status(statusCode).send('<!doctype html>\n' + html);
    //res.status(statusCode).send('<!doctype html>\n' + Rhtml);
  } catch (err) {
    next(err);
  }
});
*/
// launch the server
server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
