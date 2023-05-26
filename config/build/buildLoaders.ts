import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/build';

export function buildLoaders({ isDev }: BuildOptions): ModuleOptions {
	const svgrLoader = {
		test: /\.(svg)$/,
		use: ['@svgr/webpack'],
	};
	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => resPath.includes('.module.'),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	};
	return {
		rules: [fileLoader, svgrLoader, typescriptLoader, sassLoader],
	};
}
