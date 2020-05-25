const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const Uglify = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const regeneratorRuntime = require('regenerator-runtime');

const commonConfig = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new Uglify(),
    // Define the filename pattern for CSS.
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'entry',
                targets: {
                  esmodules: true,
                },
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['@babel/proposal-class-properties'],
        },
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: `postcss-loader`,
            options: {
              options: {},
              plugins: () => {
                autoprefixer({ overrideBrowserslist: ['last 2 versions'] });
              },
            },
          },
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
};

const serverConfig = {
  ...commonConfig,
  entry: './server/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/',
  },
  externals: nodeExternals(),
};

const clientConfig = {
  ...commonConfig,
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'client.js',
    publicPath: '/',
  },
};

const cssConfig = {
  ...commonConfig,
  entry: './sass/index.scss',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
};

module.exports = [cssConfig, clientConfig, serverConfig];
