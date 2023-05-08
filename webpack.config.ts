import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { buildConfiguration } from './config/build/buildConfiguration';
import { BuildEnv } from './config/build/types/build';

export default (env: BuildEnv) => {
	const config: WebpackConfiguration = buildConfiguration({
		port: env.port || 3000,
		mode: env.mode || 'development',
		paths: {
			entry: path.resolve(__dirname, 'src', 'index.ts'),
			out: path.resolve(__dirname, 'dist'),
			html: path.resolve(__dirname, 'public', 'index.html'),
		},
		isDev: env.mode === 'development' ? true : false,
	});
	return config;
};
