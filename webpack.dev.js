// const merge = require('webpack-merge')
// const common = require('./webpack.common.js')

// module.exports = merge(common, {
//   mode: 'development',
//   devtool: 'eval-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'img/[name].[ext]',
//               esModule: false,
//               limit: 8192
//             }
//           }
//         ]
//       }
//     ]
//   }
// })

const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
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
  if (env.development) {
    config.devtool = 'source-map'
  }

  if (env.production) {
    //...
  }

  return config
}