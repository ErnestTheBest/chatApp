module.exports = {
  mode: 'production',
  entry: {
    login: './script/loginPage.js',
    register: './script/registrationPage.js',
    profile: './script/profilePage.js'
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
  }
}