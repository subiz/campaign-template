var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['./dev.js'],
	plugins: [
		// uncomment the following line to run bundle analysis
		// new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
		}),
	],
	devServer: {
		port: 8082,
		host: '0.0.0.0',
	},
	optimization: {
		minimize: true,
	},
	module: {
		rules: [
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false, // so we dont have to use .default
							name: '[path][name].[hash:7].[ext]', // full path structure
						},
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
