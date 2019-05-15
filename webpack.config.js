const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    register: './src/script/registrationPage.js',
    chat: './src/script/chat.js',
    profile: './src/script/profile.ts',
    login: './src/script/login.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
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