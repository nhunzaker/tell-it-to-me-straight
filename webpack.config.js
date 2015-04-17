module.exports = {

  entry: {
    app: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },

  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },

  module: {
    loaders: [{
      test    : /\.jsx*$/,
      exclude : /node_modules/,
      loader  : 'babel?stage=1'
    }]
  }

}
