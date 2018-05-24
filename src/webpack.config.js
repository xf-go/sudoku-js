const path = require('path');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
                exclude: path.resolve(__dirname, 'node_module'),
            }
        ]
    }
}