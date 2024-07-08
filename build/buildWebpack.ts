import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from "./buildDevServer";
import webpack from "webpack";

import 'webpack-dev-server';
import { buildLoaders } from "./buildLoaders";
import {OptionsI} from "./types/types";

export default (options: OptionsI): webpack.Configuration => {
    const { isProd, paths } = options;
    const {output, entry} = paths;

    return {
        mode: isProd ? 'production' : 'development',
        entry: {
            entry
        },
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
        plugins: buildPlugins(options),
        output: {
            filename: '[name].bundle.js',
            path: output,
            clean: true,
        },
        optimization: {
            runtimeChunk: 'single',
        },
        module: buildLoaders(options),
        resolve: buildResolvers(options),
    };
};