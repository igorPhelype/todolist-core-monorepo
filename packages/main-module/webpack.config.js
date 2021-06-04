const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;


const prod = process.env.NODE_ENV === "production"
const todoListModuleURL = prod ? "https://todolist-module.netlify.app/remoteEntry.js" : "http://localhost:8080/remoteEntry.js"
const mainModuleUrl = prod ? "https://todolist-monorepo.netlify.app/" : "http://localhost:8081/";
const headerModuleURL = prod ? "https://header-module.netlify.app/remoteEntry.js" : "http://localhost:8082/remoteEntry.js"
const pomoModuleURL = prod ? "https://pomo-module.netlify.app/remoteEntry.js" : "http://localhost:8083/remoteEntry.js"

module.exports = {
  output: {
    publicPath: mainModuleUrl,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mainmodule",
      filename: "remoteEntry.js",
      remotes: {
        "todolist-module": "todolistmodule@" + todoListModuleURL,
        "header-module": "headermodule@" + headerModuleURL,
        "pomo-module": "pomomodule@" + pomoModuleURL,
      },
      exposes: {},
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      headerModuleURL
    }),
  ],
};
