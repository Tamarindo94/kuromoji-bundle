const path = require('path');

module.exports = {
  entry: './src/index.js',
	devtool: false,
  output: {
    filename: 'kuromoji.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'kuromojiBundle',
    libraryTarget: 'window',
  },
  // mode: 'production',
  mode: 'development',
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader
        },
      },
    ],
  },
};
