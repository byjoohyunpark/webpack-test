//////////////////////////
/* This is testing file */
//////////////////////////

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

// common
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[hash:20].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
              esModule: false,
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}

module.exports = env => {
  // development
  if (env.development) {
    config.mode = 'developmebnt'
    config.devtool = 'eval-source-map'
  }

  // production
  if (env.production) {
    config.plugins.push(new CleanWebpackPlugin())
    // config.module.rules.
  }

  return config
}
