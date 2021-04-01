const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve('dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
    writeToDisk: true,
  },
  entry: path.resolve('index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.[contenthash].js',
    chunkFilename: 'vendors.[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve( 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              }
            }
          }
        ],
      },
      {
        test: /\.(svg|png)/,
        type: 'asset',
      },
      {
        test: /\.(woff2|woff|ttf|eot)/,
        type: 'asset',
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};