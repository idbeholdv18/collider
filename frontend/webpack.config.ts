/// <reference path="node_modules/webpack-dev-server/types/lib/Server.d.ts"/>
import type { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

type WebpackEnv = {
  mode: "development" | "production";
};

export default (env: WebpackEnv): Configuration => {
  return {
    mode: env.mode,
    entry: "./src/index.tsx",
    output: {
      filename: "[contenthash].[name].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      open: true,
      client: {
        webSocketURL: "auto://0.0.0.0:0/ws",
      },
    },
  };
};
