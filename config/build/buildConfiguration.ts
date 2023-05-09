import { Configuration as WebpackConfiguration } from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/build';
import { buildDevServer } from './buildDevServer';

export function buildConfiguration(
	buildOptions: BuildOptions
): WebpackConfiguration {
	const { mode, paths, isDev } = buildOptions;
	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.out,
			clean: true,
		},
		module: buildLoaders(buildOptions),
		plugins: buildPlugins(buildOptions),
		resolve: buildResolves(),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(buildOptions) : undefined,
	};
}
