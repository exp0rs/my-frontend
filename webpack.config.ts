import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { buildConfiguration } from './config/build/buildConfiguration';
import { BuildEnv } from './config/build/types/build';

export default (env: BuildEnv) => {
	const port = env.port || 3000;
	const mode = env.mode || 'development';
	const isDev = mode === 'development';

	const config: WebpackConfiguration = buildConfiguration({
		port,
		mode,
		paths: {
			entry: path.resolve(__dirname, 'src', 'index.tsx'),
			out: path.resolve(__dirname, 'dist'),
			html: path.resolve(__dirname, 'public', 'index.html'),
			src: path.resolve(__dirname, 'src'),
		},
		isDev,
	});
	return config;
};
