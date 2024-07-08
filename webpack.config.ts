import buildWebpack from './build/buildWebpack';
import webpack from "webpack";

type Mode = 'production' | 'development';

interface EnvI {
    mode: Mode;
    port: number;
}

export default (env: EnvI) => {
    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';
    const port = 3000;

    const config:webpack.Configuration = buildWebpack({isDev, isProd, port});

    return config;
}
