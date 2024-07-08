import buildWebpack from './build/buildWebpack';
import path from "path";
import webpack from "webpack";
import {EnvI, BuildPaths} from "./build/types/types"

export default (env: EnvI) => {
    const paths:BuildPaths = {
        output: path.resolve(__dirname, "./dist"),
        entry: path.resolve(__dirname, "./src", "index.tsx"),
        src: path.resolve(__dirname, "./src"),
        devServer: path.resolve(__dirname, "./build"),
        html: path.resolve(__dirname, "./publick", "index.html"),
    }

    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';
    const port = 3000;

    const config:webpack.Configuration = buildWebpack({isDev, isProd, port, paths});

    return config;
}
