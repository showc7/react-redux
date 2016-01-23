import path from 'path';
import Webpack from 'webpack';
import server from './app-server';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: {
        main: [
            'webpack-dev-server/client',
            'webpack/hot/dev-server',
            path.join(__dirname, '../src/client/')
        ]
    },

    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name]-build.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            { test: /\.(js|jsx|es)$/, loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.json5$/, loader: 'json5-loader' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000' },
            { test: /\.(ttf|eot|wav|mp3|svg|eot|woff|woff2)$/, loader: 'file?name=[name].[ext][hash]' },
            { test: /\.(wav|mp3)$/, loader: 'file-loader' },
            { test: /\.html/, loader: 'html-loader' },
            { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
       ]
    },

    devtool: 'cheap-inline-module-source-map',

    resolve: {
        modulesDirectories: ['node_modules', 'src/client', 'src/server'],
        extensions: ['', '.jsx', '.js', '.es', '.json', 'css', 'scss']
    },

    plugins: [
        new ExtractTextPlugin('[name]-build.css'),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin(),

        function () {
            this.plugin('done', (stats) => {
                if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
                    console.log(stats.compilation.errors);
                } else {
                    console.log('success build');
                    server();
                }
            });
        }
    ]
};
