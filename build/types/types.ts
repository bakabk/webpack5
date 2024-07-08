export interface BuildPaths {
    output: string,
    entry: string,
    html: string,
    src: string,
    devServer: string,
}

export interface OptionsI {
    isProd?: boolean,
    isDev?: boolean,
    port?: number,
    paths?: BuildPaths,
}

export type Mode = 'production' | 'development';

export interface EnvI {
    mode: Mode;
    port: number;
}