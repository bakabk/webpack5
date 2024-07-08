import { Configuration } from "webpack";
import {OptionsI} from "../build/types/types";

export const buildDevServer = ({paths, port}: OptionsI):Configuration['devServer'] => {
    return {
        static: {
            directory: paths.output,
        },
        port: port ?? 3000,
        open: false,
        historyApiFallback: true,
      }
}