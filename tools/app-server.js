import cp from 'child_process';
import path from 'path';
import watch from 'node-watch';
import opener from 'opener';
import _ from 'lodash';

const APP_PATH = path.join(__dirname, '../src/server');
const WATCH_PATH = path.join(__dirname, '../src/server');

let app;
let isStarted;

const startApp = () => {
    const env = _.assign({ NODE_ENV: 'development', WEBPACK_SERVE: true }, process.env);
    app = cp.fork(APP_PATH, { env });

    app.once('message', (message) => {
        if (message.match(/^online$/)) {
            if(!isStarted) {
                isStarted = true;
                opener('http://localhost:8080');

                watch(
                    WATCH_PATH,
                    function(file) {
                        console.log('restarting app');
                        app.kill('SIGTERM');
                        return startApp();
                    }
                );
            }
        }
    });
};

process.on('exit',() => {
    app.kill('SIGTERM');
});

export default () => {
    if(!app) {
        return startApp();
    }
};
