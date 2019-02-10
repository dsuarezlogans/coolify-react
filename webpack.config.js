const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'coolify-react.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
