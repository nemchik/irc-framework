// webpack v4
const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname),
    filename: 'browser.js',
    library: 'irc-framework',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  },
  plugins: [ ],
  optimization: {
    minimize: true
  },
  devtool: 'source-map',
};
