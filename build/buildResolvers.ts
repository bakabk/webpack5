import webpack from "webpack";
import {OptionsI} from "../build/types/types";

export const buildResolvers = (options: OptionsI):webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": options.paths.src
        }
    }
}