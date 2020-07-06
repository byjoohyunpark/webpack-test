const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    index2: './src/index2.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.[contenthash:20].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'node_vendors', // part of the bundle name and
          // can be used in chunks array of HtmlWebpackPlugin
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:20].css',
      chunkFilename: '[id].[contenthash:20].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/index2.html',
      filename: 'index2.html',
      chunks: ['index2']
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      statsFilename: 'analyze'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[contenthash:20].[ext]',
              esModule: false,
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
