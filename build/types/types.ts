export interface BuildPaths {
    output: string,
    entry: string,
    html: string,
    src: string,
    devServer: string,

}

export type Mode = 'production' | 'development';
export type Platform = 'mobile' | 'desktop'

export interface OptionsI {
    isProd?: boolean,
    isDev?: boolean,
    port?: number,
    paths?: BuildPaths,
    platform: Platform,
    mode?: Mode
}

export interface EnvI {
    mode?: Mode;
    port?: number;
    platform?: Platform
}