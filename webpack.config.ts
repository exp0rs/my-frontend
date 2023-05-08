import path from 'path';
import { Configuration } from 'webpack';
import { buildConfiguration } from './config/build/buildConfiguration';
import { BuildMode, BuildOptions } from './config/build/types/build';

const mode: BuildMode = 'development';
const isDev = mode === 'development' ? true : false;

const buildOptions: BuildOptions = {
	mode,
	paths: {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		out: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	},
	isDev,
};

const config: Configuration = buildConfiguration(buildOptions);
export default config;
