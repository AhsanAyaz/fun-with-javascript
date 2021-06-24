const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    js_queue: "./src/js-queue/queue.js",
    js_stack: "./src/js-stack-example/main.js",
    js_dequeue: "./src/js-dequeue/dequeue.js",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "JS Queue",
      template: "./src/js-queue/index.html",
      filename: "./js_queue/index.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      title: "JS Stack",
      template: "./src/js-stack-example/index.html",
      filename: "./js_stack/index.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      title: "JS DeQueue",
      template: "./src/js-dequeue/index.html",
      filename: "./js_dequeue/index.html",
      inject: false,
    }),
  ],
  output: {
    filename: "[name]/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
