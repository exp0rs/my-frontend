export type BuildMode = 'development' | 'production';

export interface BuildPaths {
	entry: string;
	out: string;
	html: string;
}

export interface BuildOptions {
	port: number;
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
}

export interface BuildEnv {
	port?: number;
	mode?: BuildMode;
}
