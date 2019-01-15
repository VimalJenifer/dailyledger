const webpack = require('webpack');
const path = require('path');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                // use: {
                    loader: 'babel-loader'
                // }
            }
        ]
        // loaders: [
        //     // Transform JSX with React.
        //     {
        //         test: /\.(js|jsx)$/,
        //         loader: 'babel-loader',
        //         query: {
        //             presets: ['es2015', 'react'],
        //         },
        //     },
        // ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(GLOBALS)
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 5000
    }
};