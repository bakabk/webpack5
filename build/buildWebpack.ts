import path from "path";
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from "./buildDevServer";
import webpack from "webpack";

import 'webpack-dev-server';
import { buildLoaders } from "./buildLoaders";

interface OptionsI {
    isProd?: boolean,
    isDev?: boolean,
    port?: number,
}

type configPathType = {
    dirPath?: string,
    fileName?: string,
};

const configPath = ({ dirPath, fileName }: configPathType): string => {
    const dir = dirPath ?? '../src';
    const file = fileName ?? '';

    return path.resolve(__dirname, dir, file);
}

export default ({ isProd, isDev, port }: OptionsI): webpack.Configuration => {
    const outputPath = configPath({ dirPath: '../dist' });
    const devServerDirectory = configPath({ dirPath: '../dist' })
    const pluginsTemplatePath = configPath({ dirPath: '../publick', fileName: 'index.html' });

    return {
        mode: isProd ? 'production' : 'development',
        entry: {
            index: configPath({ fileName: 'index.tsx' }),
        },
        devtool: 'inline-source-map',
        devServer: buildDevServer({ port, directory: devServerDirectory }),
        plugins: buildPlugins({ template: pluginsTemplatePath, isDev, isProd }),
        output: {
            filename: '[name].bundle.js',
            path: outputPath,
            clean: true,
        },
        optimization: {
            runtimeChunk: 'single',
        },
        module: buildLoaders({ isDev }),
        resolve: buildResolvers(),
    };
};