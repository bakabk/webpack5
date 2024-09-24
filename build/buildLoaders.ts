import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { OptionsI } from "../build/types/types";

export const buildLoaders = ({ isDev }: OptionsI): ModuleOptions => {
    const tsLoader = {
        //ts loader умеет работать с JSX
        //если бы не успользовали ts то нужен был бы babel loader
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: isDev
            }
          }
        ]
      };

    const cssLoaderWithModule = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]_[local]" : "[hash:base64:5]"
            },
        },
    };

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModule,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const imageLoader = [{
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
    {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
    },
    {
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    }
    ];

    const fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    const xmlLoader = {
        test: /\.xml$/i,
        use: ['xml-loader'],
    };

    const rules = [
        tsLoader,
        cssLoaders,
        ...imageLoader,
        fontsLoader,
        xmlLoader,
    ];

    return {
        rules
    }
}