const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
    new HtmlWebPackPlugin({
      template: './src/client/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
            presets: ['react', 'es2015'],
          },
      }
    ]
  }
};
