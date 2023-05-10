import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/build';
import { buildDevServer } from './buildDevServer';

export function buildConfiguration(
	buildOptions: BuildOptions
): webpack.Configuration {
	const { mode, paths, isDev } = buildOptions;
	console.log('buildOptions:', buildOptions);
	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.out,
			clean: true,
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(buildOptions) : undefined,
		module: buildLoaders(buildOptions),
		plugins: buildPlugins(buildOptions),
		resolve: buildResolves(buildOptions),
	};
}
