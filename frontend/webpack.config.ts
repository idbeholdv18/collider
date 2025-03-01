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
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "[contenthash].[name].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
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
