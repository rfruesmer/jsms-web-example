const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    module: {
        noParse: /log4js/,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};

