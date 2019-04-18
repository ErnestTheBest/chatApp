const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    login: './src/script/loginPage.js',
    register: './src/script/registrationPage.js',
    profile: './src/script/profilePage.js',
    chat: './src/script/chat.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: 'dist'
  },
  plugins: [
    new copyWebpackPlugin([
      {
        from: './src/index.html'
      },
      {
        from: './src/register.html'
      },
      {
        from: './src/chat.html'
      },
      {
        from: './src/profile.html'
      },
      {
        from: './src/styles', to: 'styles'
      }
    ])
  ]
}