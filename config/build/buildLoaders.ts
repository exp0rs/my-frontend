import { ModuleOptions } from 'webpack';
export function buildLoaders(): ModuleOptions {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	return {
		rules: [typescriptLoader],
	};
}
