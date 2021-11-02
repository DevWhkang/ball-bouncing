const path = require('path');

module.exports = {
  entry: ['./src/app.ts'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
  devtool: 'source-map',
  mode: 'development',
};
