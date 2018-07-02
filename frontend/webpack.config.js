/* eslint-disable */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "src",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [htmlPlugin, 
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};