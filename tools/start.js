import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';
const config = Webpack(webpackConfig);
const server = {
        port: 8080,
        host: 'localhost',

        options: {
            hot: true,

            publicPath: '/',
            stats: {
                colors: true
            },

            noInfo: true,
            proxy: [{
                path: '*',
                target: 'http://localhost:8081'
            }],
            historyApiFallback: true
        }
    };

const devServer = new WebpackDevServer(config, server.options);

devServer.listen(server.port, server.host, () => {
    console.log('Server started.');
});
