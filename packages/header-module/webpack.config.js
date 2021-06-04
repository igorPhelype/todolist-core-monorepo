const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";
const publicPath = prod ? "https://header-module.netlify.app/" : "http://localhost:8082/";

module.exports = {
  entry: {
    bundle: ["./src/main.js"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("..", "..", "node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: false,
            hotReload: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 8082,
  },
  mode,
  plugins: [
    new ModuleFederationPlugin({
      name: "headermodule",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./src/Header": "./src/Header.svelte"
      },
      shared: require("./package.json").dependencies,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
  devtool: prod ? false : "source-map",
};
