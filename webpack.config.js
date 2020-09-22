var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['./index.js'],
	plugins: [
		// uncomment the following line to run bundle analysis
		// new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)(),
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
