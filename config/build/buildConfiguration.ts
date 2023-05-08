import { Configuration } from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/build';

export function buildConfiguration(buildOptions: BuildOptions): Configuration {
	const { mode, paths } = buildOptions;
	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.out,
			clean: true,
		},
		module: buildLoaders(),
		plugins: buildPlugins(buildOptions),
		resolve: buildResolves(),
	};
}
