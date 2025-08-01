const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    port: 4200,
    open: true,
  },
  mode: 'development',
};
