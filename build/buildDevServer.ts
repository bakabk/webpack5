import { Configuration } from "webpack";

interface DevServerI {
    directory?: string,
    port: number
}

export const buildDevServer = ({directory, port}: DevServerI):Configuration['devServer'] => {
    return {
        static: {
            directory,
        },
        port: port ?? 3000,
        open: false,
        historyApiFallback: true,
      }
}