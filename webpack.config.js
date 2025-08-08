const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'kuromoji.bundle.js',
		library: 'kuromoji',
		libraryTarget: 'umd'
	},
	resolve: {
		fallback: {
			fs: false,
			path: require.resolve('path-browserify')
		}
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				type: 'asset/resource',
				generator: {
					filename: '[name][ext]' // leave dictionary file paths intact if needed
				}
			}
		]
	}
}
