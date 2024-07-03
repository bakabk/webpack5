import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import 'webpack-dev-server';

type Mode = 'production' | 'development';

interface EnvI {
    mode: Mode
}

export default (env: EnvI) => {
    const devMode = env.mode !== "production";

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: {
            index: path.resolve(__dirname, 'src', 'index.tsx'),
        },
        devtool: 'inline-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist')
            },
            port: 3000,
          },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Development',
                template: path.resolve(__dirname, 'publick', 'index.html'),
            }),
            new webpack.ProgressPlugin(),
        ].concat(devMode ? [] : [new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        })]),
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        optimization: {
            runtimeChunk: 'single',
          },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      // Creates `style` nodes from JS strings
                      devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                      // Translates CSS into CommonJS
                      "css-loader",
                      // Compiles Sass to CSS
                      "sass-loader",
                    ],
                  },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(csv|tsv)$/i,
                    use: ['csv-loader'],
                },
                {
                    test: /\.xml$/i,
                    use: ['xml-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    };

    return config;
};