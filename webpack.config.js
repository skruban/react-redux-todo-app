const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const publicFolderPath = path.resolve(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: publicFolderPath,
    filename: 'main.js'
  },
  devServer: {
    hot: true,
    port: '9000',
    contentBase: publicFolderPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Todo App',
      filePath: publicFolderPath,
      filename: 'index.html'
    })
  ]
};
