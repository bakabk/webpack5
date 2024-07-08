import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import BundleAnalyzerPlugin from "webpack-bundle-analyzer";


interface BuildPluginsI {
    template: string,
    isDev?: boolean,
    isProd?: boolean
}

export const buildPlugins = ({template, isDev, isProd}: BuildPluginsI):Configuration['plugins'] => {
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: template,
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