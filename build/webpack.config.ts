import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

const commonCssLoader = [
	MiniCssExtractPlugin.loader,
	'css-loader',
	{
		loader: 'postcss-loader',
		options: {
			ident: 'postcss',
			plugins: () => [
				require("postcss-preset-env")()
			]
		}
	}
]

export default {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		filename: '[name].js',
		path: resolve(__dirname, "../dist")
	},
	resolve: {
		extensions: [".ts", ".tsx", ".vue", ".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.tsx?$/,
				use: [
					"babel-loader",
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
							appendTsSuffixTo: [/\.vue$/]
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: commonCssLoader
			},
			{
				test: /\.less$/,
				use: [
					...commonCssLoader,
					'less-loader'
				]
			},
			{
				test: /\.(jpg|png|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 8 * 1024,
					name: '[hash:10].[ext]',
					esModules: false,
					outputPath: 'static/images'
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				exclude: /\.(vue|js|ts|css|less|html|jpg|png|gif|tsx)$/,
				loader: 'file-loader',
				options: {
					name: '[hash:10].[ext]',
					outputPath: 'static/media'
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'antenta-cli',
			template: './public/index.html'
		}),
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			"__VUE_OPTIONS_API__": true,
			"__VUE_PROD_DEVTOOLS__": false
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		})
	],
	devServer: {
		port: 3000
	}
}
