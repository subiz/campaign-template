var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['babel-polyfill', './dev.js'],
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'head',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
}
