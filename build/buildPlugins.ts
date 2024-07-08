import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import BundleAnalyzerPlugin from "webpack-bundle-analyzer";
import {OptionsI} from "../build/types/types";


export const buildPlugins = ({paths, isDev, isProd}: OptionsI):Configuration['plugins'] => {
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: paths.html,
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