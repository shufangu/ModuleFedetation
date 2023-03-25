const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./main_[contenthash].js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "模块联邦2",
    }),
    new ModuleFederationPlugin({
      name: 'app2',
      remotes: {
        app1: "app1@http://localhost:8081/remoteEntry.js"
      }
    })
  ],

  devServer: {
    open: true,
    port: 8082,
    hot: true,
  },
};
