import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.pug', // Path to your Pug template
      filename: 'index.html', // Output HTML file
      minify: false, // Minify HTML output
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/, // Process .pug files
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true, // Indent the output HTML for readability
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       // plugins: [
          //       //   [
          //       //     "postcss-preset-env",
          //       //     {
          //       //       // Options
          //       //     },
          //       //   ],
          //       // ],
          //     },
          //   },
          // },
        ],
      },
    ],
  },
};
