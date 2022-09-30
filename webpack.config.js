const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        assetModuleFilename: "[name][ext]",
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"]
        }
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /\node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.([cm]?ts|tsx)$/, loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Expenses Chart Component",
            filename: "index.html",
            template: "src/template.html",
        }),
        new BundleAnalyzerPlugin(),
    ]
}