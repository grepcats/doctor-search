const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CopyWebpackPlugin([
      {from:'./src/img',to:'images'}
    ]),
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'independent',
      template: './src/index.html',
      inject: 'body'
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i, // image code
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader', // image code
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude:[
          /node_modules/,
          /spec/
        ],
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader:'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    ]
  }
};
