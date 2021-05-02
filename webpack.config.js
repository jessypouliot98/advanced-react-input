const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: path.join(__dirname, 'exemple', 'index.tsx')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				use: 'ts-loader',
				exclude: '/node_modules/',
			},
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			templateContent: '<div id="root"></div>'
		}),
	],
};
