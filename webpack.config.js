const webpack = require('webpack');
const path = require('path');
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
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000
    }
};