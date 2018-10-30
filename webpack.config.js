const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV.trim();
const isProd = NODE_ENV === 'production';
const devtoolConfig = isProd ? 'cheap-module-source-map' : 'inline-source-map';


module.exports = {
    mode: 'none',
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].bundle.js',
        libraryTarget: 'amd'
    },
    resolve: {
        extensions: ['.webpack.js', '.js', '.json']
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            // JS files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // SCSS files
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false, // we need to use the dojo loader
            jsapiVersion: '4.9',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify(NODE_ENV)
            }
          }),
      
    ],
    externals: [
        function (context, request, callback) {
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)
            ) {
                return callback(null, "amd " + request);
            }
            callback();
        }
    ],
    devServer: {
        contentBase: __dirname,
        hot: true,
        inline: true,
        compress: true,
        open: true,
        quiet: false,
        noInfo: false,
        stats: {
            assets: false,
            children: false,
            chunks: false,
            chunkModules: false,
            colors: true,
            entrypoints: false,
            hash: false,
            modules: false,
            timings: false,
            version: false,
        },
        port: 9000
    },
    devtool: devtoolConfig,
};
