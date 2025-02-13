import path from "path";

export default (env: any) => {
  return {
    entry: "./src/index.ts",
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
  };
};
