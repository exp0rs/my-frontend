import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/build';

export function buildDevServer({
	port,
}: BuildOptions): WebpackDevServerConfiguration {
	return {
		port: port,
		open: true,
		historyApiFallback: true,
	};
}
