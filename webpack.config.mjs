import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const pugPages = () => {
  const dir = './src/pages';
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    if (file.match(/\.pug$/)) {
      let filename = file.substring(0, file.length - 4);
      return new HtmlWebpackPlugin({
        template: dir + '/' + filename + '.pug',
        filename: filename + '.html',
        minify: false
      });
    }
  });
};

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...pugPages(),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['@tailwindcss/postcss']]
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    open: true,
    port: 8080,
    liveReload: true,
    watchFiles: ['src/**/*.**']
  }
};
