const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "example/index.ts"),
    output: {
        path: path.resolve(__dirname, "example/dist")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        experimentalWatchApi: true,
                        transpileOnly: true
                    }
                }
            }
        ]
    }
}