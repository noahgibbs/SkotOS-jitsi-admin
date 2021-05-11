const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
