const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = __dirname;

module.exports = {
	mode: 'development',
	entry: {
		app: path.join(root, 'exemple', 'index.tsx')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$|tsx/,
				use: 'ts-loader',
				exclude: '/node_modules/',
			}, {
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(root, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			templateContent: '<div id="root"></div>'
		}),
	],
};
