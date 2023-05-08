import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/build';

export function buildDevServer({
	port,
}: BuildOptions): WebpackDevServerConfiguration {
	return {
		port,
		open: true,
		static: './dist',
	};
}
