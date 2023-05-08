import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/build';

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
	return [
		new ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
	];
}
