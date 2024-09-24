import webpack, { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import BundleAnalyzerPlugin from "webpack-bundle-analyzer";
import {OptionsI} from "../build/types/types";


export const buildPlugins = ({paths, isDev, isProd, platform, mode}: OptionsI):Configuration['plugins'] => {
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: paths.html,
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __ENV__: JSON.stringify(mode),
        })
    ];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }));

        // plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}