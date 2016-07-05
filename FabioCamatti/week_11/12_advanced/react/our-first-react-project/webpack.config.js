module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"
    }]
  },
  plugins: []
};
