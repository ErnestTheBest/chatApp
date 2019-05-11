const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    login: './src/script/loginPage.js',
    register: './src/script/registrationPage.js',
    profile: './src/script/profilePage.js',
    chat: './src/script/chat.js',
    tsprofile: './src/script/profile.ts',
    ts: './playground/some.ts'
  },
  module: {
    rules: [
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }

    ]
  },
  devServer: {
    contentBase: 'dist'
  },
  devtool: 'cheap-source-map',
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