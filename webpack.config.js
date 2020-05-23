const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Uglify = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './server/index.js',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new Uglify()
  ],
  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};
