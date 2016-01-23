'use strict';

import path from 'path';
// import helmet from 'helmet';
// import hpp from 'hpp';
// import bodyParser from 'body-parser';
// import staticsRouter from '../routes/statics';
// import apiRouter from '../routes/api';
import env from '../../../env';
import express from 'express';

const errorHandler = (err, req, res, next) => {
    let errData = err.message ? err.message : err;

    res.status(err.status || 500);

    if (req.accepts('json')) {
        res.json({ error: true, data: errData });
    } else {
        res.render('error', {
            message: err.message,
            error: {},
            title: 'error'
        });
    }
};

export default (app) => {
    // app.set('views', path.join(__dirname, '../views'));
    // app.set('view engine', 'ejs');
    app.set('port', (process.env.PORT || env.express.port) || 5000);

    // // some secure headers
    // app.use(helmet.xssFilter());
    // app.use(helmet.frameguard('sameorigin'));
    // app.use(helmet.hidePoweredBy());
    // app.use(helmet.ieNoOpen());
    // app.use(helmet.noSniff());

    // app.use(bodyParser.urlencoded({
    //     extended: true
    // }));

    // app.use(bodyParser.json());
    // app.use(express.static(path.join(__dirname, '../../../build')));

    // app.use(hpp());
    // app.use('/', apiRouter);
    // app.use('/', staticsRouter);

    app.use(errorHandler);

    app.get('*', (req, res, next) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    });

    console.log('express configured');
};
